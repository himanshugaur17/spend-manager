import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { requestPermissionsAsync } from "./modules/android-sms-manager";
export default function App() {
  const [permState, setPermState] = useState(null);
  requestPermissionsAsync().then((value) => {
    if (value && value.status === "granted")
      setPermState("Thanks for granting the permission");
    else setPermState("We are nothing without read sms permission");
  });
  return (
    <View style={styles.container}>
      <Text>{permState}</Text>
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
