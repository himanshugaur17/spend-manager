import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { getSmsAsync } from "../modules/android-sms-manager/src/message/message";
export default function SmsListComponent({ permGranted }) {
  const [smsList, setSmsList] = useState(null);
  useEffect(() => {
    if (permGranted)
      getSmsAsync().then(
        (value) => {
          console.log(`sms list: ${value.data}`);
          setSmsList(value);
        },
        (reason) => {
          console.log(`rejected inner: ${reason}`);
        }
      );
  }, [permGranted]);
  return (
    <View>
      <Text>SmsListComponent</Text>
      {smsList
        ? smsList.map((sms) => (
            <View>
              <Text>
                {sms.from} : {sms.body} : {sms.body}
              </Text>
            </View>
          ))
        : null}
    </View>
  );
}
