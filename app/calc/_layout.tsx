import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";

import { FC } from "react";
import CalcHeader from "@/components/calc/Header";
import CalculatorBody from "@/components/calc/Body";
import CalculatorFooter from "@/components/calc/Footer";
import CalculatorCredits from "@/components/calc/Credits";

const CalcScreen: FC = () => {
  return (
    <View style={s.root}>
      <CalcHeader />
      <CalculatorBody />
      <CalculatorFooter />
      <CalculatorCredits />
    </View>
  );
};
export default CalcScreen;
const s = StyleSheet.create({
  root: {
    height: "100%",
  },
});
