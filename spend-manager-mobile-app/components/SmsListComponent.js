import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { getSmsAsync } from "../modules/android-sms-manager/src/message/message";
import { upiTxnParser } from "../utils/messageParser";
export default function SmsListComponent({ permGranted }) {
  const [upiTxns, setUpiTxns] = useState(null);
  useEffect(() => {
    if (permGranted)
      getSmsAsync().then((value) => {
        var smsList = value.data;
        var upiTxns = smsList.map((sms) => upiTxnParser(sms));
        setUpiTxns(upiTxns);
      });
  }, [permGranted]);
  return (
    <View>
      <Text>TxnsList</Text>
      {upiTxns
        ? upiTxns.map((upiTxn) => (
            <View key={upiTxn.refNumber}>
              <Text>
                {upiTxn.refNumber} : {upiTxn.date} : {upiTxn.merchant} :{" "}
                {upiTxn.amount}
              </Text>
            </View>
          ))
        : null}
    </View>
  );
}
