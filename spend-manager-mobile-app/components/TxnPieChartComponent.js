import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Pie, PolarChart } from "victory-native";
import constants from "../constants/constants";
import { generateDummyData } from "../utils/dummyDataGen";
import { groupBy, reduceForPieChart } from "../utils/utils";
var count = 1;
export default function TxnPieChartComponent() {
  const txnsByMerchant = groupBy("merchant", generateDummyData());
  const expenditureByMerchant = reduceForPieChart(txnsByMerchant, "amount");
  console.log(`count: ${count++}----${expenditureByMerchant}`);
  return (
    <View style={styles.pieChartContainer}>
      <Text style={styles.heading}>Expenditure By Merchant</Text>
      <PolarChart
        labelKey={"label"}
        valueKey={"value"}
        colorKey={"color"}
        data={expenditureByMerchant}
      >
        <Pie.Chart />
      </PolarChart>
    </View>
  );
}
const styles = StyleSheet.create({
  pieChartContainer: {
    flex: 1,
    width: 300,
    alignItems: "center",
  },
  heading: {
    fontSize: constants.SIZES.h2,
    fontWeight: "bold",
    paddingTop: 50,
  },
});
