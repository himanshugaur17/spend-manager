package expo.modules.androidsmsmanager

import android.Manifest
import android.os.Bundle
import android.provider.Telephony
import expo.modules.interfaces.permissions.Permissions
import expo.modules.kotlin.Promise
import expo.modules.kotlin.exception.Exceptions
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class AndroidSmsManagerModule : Module() {
    // Each module class must implement the definition function. The definition consists of components
    // that describes the module's functionality and behavior.
    // See https://docs.expo.dev/modules/module-api for more details about available components.
    private val permissionsManager: Permissions
        get() = appContext.permissions ?: throw Exceptions.PermissionsModuleNotFound()

    override fun definition() = ModuleDefinition {
        // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
        // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
        // The module will be accessible from `requireNativeModule('AndroidSmsManager')` in JavaScript.
        Name("AndroidSmsManager")

        // Sets constant properties on the module. Can take a dictionary or a closure that returns a dictionary.
        Constants("PI" to Math.PI)

        // Defines event names that the module can send to JavaScript.
        Events("onChange")

        // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
        Function("hello") {
            "Hello Wordly!!!! 👋"
        }

        // Defines a JavaScript function that always returns a Promise and whose native code
        // is by default dispatched on the different thread than the JavaScript runtime runs on.
        AsyncFunction("setValueAsync") { value: String ->
            // Send an event to JavaScript.
            sendEvent("onChange", mapOf("value" to value))
        }

        // Enables the module to be used as a native view. Definition components that are accepted as part of
        // the view definition: Prop, Events.
        View(AndroidSmsManagerView::class) {
            // Defines a setter for the `name` prop.
            Prop("name") { view: AndroidSmsManagerView, prop: String ->
                println(prop)
            }
        }

        AsyncFunction("requestPermissionsAsync") { promise: Promise ->
            Permissions.askForPermissionsWithPermissionsManager(permissionsManager, promise, Manifest.permission.READ_SMS, Manifest.permission.RECEIVE_SMS)
        }

        AsyncFunction("getPermissionsAsync") { promise: Promise ->
            Permissions.getPermissionsWithPermissionsManager(permissionsManager, promise, Manifest.permission.READ_SMS, Manifest.permission.RECEIVE_SMS)
        }

        AsyncFunction("getSmsAsync") { promise: Promise ->
            ensureReadPermission()
            val smsList = ArrayList<SmsInfo>()
            val contentResolver = appContext.currentActivity?.contentResolver
            val cursor = contentResolver?.query(Telephony.Sms.Inbox.CONTENT_URI, null, null, null, null)
            cursor?.moveToFirst()
            val maxMessageToIterate = 10
            while (cursor?.moveToNext() == true && smsList.size < maxMessageToIterate) {
                val id = cursor.getString(cursor.getColumnIndexOrThrow(Telephony.Sms._ID))
                val receivedFrom = cursor.getString(cursor.getColumnIndexOrThrow(Telephony.Sms.CREATOR))
                val date = cursor.getString(cursor.getColumnIndexOrThrow(Telephony.Sms.DATE))
                val subject = cursor.getString(cursor.getColumnIndexOrThrow(Telephony.Sms.SUBJECT))
                val body = cursor.getString(cursor.getColumnIndexOrThrow(Telephony.Sms.BODY))
                val sms = SmsInfo(id, receivedFrom, date, subject, body)
                smsList.add(sms)
            }
            cursor?.close()
            val smsBundle = Bundle().apply {
                putParcelableArrayList("data", smsList)
                putBoolean("success", true)
            }
            promise.resolve(smsBundle)
        }


    }

    private fun ensureReadPermission() {
        val hasPermission = permissionsManager.hasGrantedPermissions(Manifest.permission.READ_SMS)
        if (!hasPermission) {
            throw Exceptions.MissingPermissions(Manifest.permission.READ_SMS)
        }
    }
}
