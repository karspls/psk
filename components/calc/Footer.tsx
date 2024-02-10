import { FC } from "react";
import usei18n from "../usei18n";
import styled from "styled-components/native";

const Text = styled.Text(({ theme }) => ({
  marginHorizontal: 20,
  fontSize: 14,
  color: theme.footerColor,
  marginTop: 25,
}));
const CalculatorFooter: FC = () => {
  const i18n = usei18n();
  return <Text>{i18n("calculatoreCaption")}</Text>;
};

export default CalculatorFooter;
