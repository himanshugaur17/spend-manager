import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SmsListComponent from "./components/SmsListComponent";
import { requestPermissionsAsync } from "./modules/android-sms-manager/src/message/message";
export default function App() {
  const [permState, setPermState] = useState(null);
  const [permGranted, setPermGranted] = useState(false);
  requestPermissionsAsync().then((value) => {
    if (value && value.status === "granted") {
      setPermState("Thanks for granting the permission");
      setPermGranted(true);
    } else setPermState("We are nothing without read sms permission");
  });
  return (
    <View style={styles.container}>
      <Text>{permState}</Text>
      <SmsListComponent permGranted={permGranted} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
