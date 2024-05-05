import React from "react";
import { StyleSheet, View } from "react-native";
import { Pie, PolarChart } from "victory-native";
import { generateDummyData } from "../utils/dummyDataGen";
export default function TxnPieChartComponent() {
  const txnList = generateDummyData().map((txn) => {
    return { ...txn, value: txn.amount, label: };
  });
  return (
    <View style={styles.pieChartContainer}>
      <PolarChart
        labelKey={"label"}
        valueKey={"value"}
        colorKey={"color"}
        data={txnList}
      >
        <Pie />
      </PolarChart>
    </View>
  );
}
const styles = StyleSheet.create({
  pieChartContainer: {
    flex: 1,
    backgroundColor: "grey",
  },
});
