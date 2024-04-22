import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, View } from "react-native";
import { hello, requestPermissionsAsync } from "./modules/android-sms-manager";
export default function App() {
  const permPromise = requestPermissionsAsync().then((value) => {
    Alert.alert("perm granted");
  });
  return (
    <View style={styles.container}>
      <Text>{hello()} yes, it's native</Text>
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
