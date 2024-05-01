import AndroidSmsManagerModule from "../AndroidSmsManagerModule";

export async function requestPermissionsAsync() {
  return await AndroidSmsManagerModule.requestPermissionsAsync();
}

export async function getPermissionsAsync() {
  return await AndroidSmsManagerModule.getPermissionsAsync();
}
export async function getSmsAsync() {
  return await AndroidSmsManagerModule.getSmsAsync();
}
