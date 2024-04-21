import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { hello } from "./modules/android-sms-manager";
export default function App() {
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
