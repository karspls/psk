import { FC } from "react";
import usei18n from "../usei18n";
import styled from "styled-components/native";
const Wrap = styled.View(({ theme }) => ({
  backgroundColor: theme.creditsBackgroundColor,
  marginTop: 25,
  marginHorizontal: 15,
  borderRadius: 21,
  fontSize: 15,
  paddingVertical: 21,
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
}));
const Text = styled.Text(({ theme }) => ({
  color: theme.text,
}));
const CalculatorCredits: FC = () => {
  const i18n = usei18n();

  return (
    <Wrap>
      <Text>{i18n("calculatorCredits")}</Text>
      <Text>{i18n("calculatorAuthors")}</Text>
    </Wrap>
  );
};

export default CalculatorCredits;
