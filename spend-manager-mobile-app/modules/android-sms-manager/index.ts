import {
  EventEmitter,
  NativeModulesProxy,
  Subscription,
} from "expo-modules-core";

// Import the native module. On web, it will be resolved to AndroidSmsManager.web.ts
// and on native platforms to AndroidSmsManager.ts
import {
  AndroidSmsManagerViewProps,
  ChangeEventPayload,
} from "./src/AndroidSmsManager.types";
import AndroidSmsManagerModule from "./src/AndroidSmsManagerModule";
import AndroidSmsManagerView from "./src/AndroidSmsManagerView";

// Get the native constant value.
export const PI = AndroidSmsManagerModule.PI;

export function hello(): string {
  return AndroidSmsManagerModule.hello();
}

export async function setValueAsync(value: string) {
  return await AndroidSmsManagerModule.setValueAsync(value);
}

const emitter = new EventEmitter(
  AndroidSmsManagerModule ?? NativeModulesProxy.AndroidSmsManager
);

export function addChangeListener(
  listener: (event: ChangeEventPayload) => void
): Subscription {
  return emitter.addListener<ChangeEventPayload>("onChange", listener);
}


export {
  AndroidSmsManagerView,
  AndroidSmsManagerViewProps,
  ChangeEventPayload,
};
