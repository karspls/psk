import { FC } from "react";
import styled from "styled-components/native";

export type ReverserProps = {
  onReverse: () => void;
};

const Wrap = styled.View(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}));
const SeparatorView = styled.View(({ theme }) => ({
  borderTopWidth: 1,
  borderBottomWidth: 1,
  borderColor: theme.stroke,
}));
const Button = styled.Pressable(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 45,
  height: 45,
  borderRadius: 45 / 2,
  backgroundColor: "transparent",
  borderWidth: 2,
  borderColor: theme.stroke,
}));

const ReverseIcon = styled.Image({
  width: 24,
  height: 24,
});
const Reverser: FC<ReverserProps> = ({ onReverse }) => {
  return (
    <Wrap>
      <SeparatorView style={{ flex: 1 }} />
      <Button onPress={() => onReverse()}>
        <ReverseIcon source={require("@/assets/images/reverse.png")} />
      </Button>
      <SeparatorView style={{ width: 17 }} />
    </Wrap>
  );
};

export default Reverser;
