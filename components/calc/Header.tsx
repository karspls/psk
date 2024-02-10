import { FC } from "react";
import usei18n from "../usei18n";
import styled from "styled-components/native";

const HeaderView = styled.View(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  borderWidth: 2,
  paddingVertical: 6,
  borderLeftWidth: 0,
  borderRightWidth: 0,
  borderColor: theme.stroke,
}));
const Logo = styled.Text({
  fontSize: 28,
  paddingHorizontal: 26,
});
const SeparatorView = styled.View(({ theme }) => ({
  height: 40,
  borderWidth: 1,
  borderColor: theme.stroke,
}));
const LogoText = styled.Text({ paddingLeft: 11, flex: 1, fontSize: 20 });

const CalcHeader: FC = () => {
  const i18n = usei18n();

  return (
    <HeaderView>
      <Logo>PSK</Logo>
      <SeparatorView />
      <LogoText>{i18n("logoText")}</LogoText>
    </HeaderView>
  );
};

export default CalcHeader;
