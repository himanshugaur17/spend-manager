package expo.modules.androidsmsmanager

import android.os.Parcelable
import kotlinx.parcelize.Parcelize

@Parcelize
data class SmsInfo(var id:String, var from: String, var date: String,  var subject:String?, var body: String) : Parcelable
