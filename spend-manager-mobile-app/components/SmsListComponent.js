import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { getSmsAsync } from "../modules/android-sms-manager/src/message/message";
export default function SmsListComponent({ permGranted }) {
  const [smsList, setSmsList] = useState(null);
  useEffect(() => {
    if (permGranted)
      getSmsAsync().then(
        (value) => {
          console.log(`sms list: ${JSON.stringify(value.data)}`);
          setSmsList(value.data);
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
            <View key={sms.id}>
              <Text>
                {sms.id} : {sms.from} : {sms.body}
              </Text>
            </View>
          ))
        : null}
    </View>
  );
}
