import { FC } from "react";
import styled from "styled-components/native";

export type RadioButtonProps = {
  children?: string;
  active?: boolean;
  onPress?: () => void;
};
const Pressable = styled.Pressable<{ active?: boolean }>(
  ({ theme, active }) => ({
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: active
      ? theme.radioButtonActiveBackgroundColor
      : theme.radioButtonBackgroundColor,
  })
);
const Text = styled.Text<{ active?: boolean }>(({ theme, active }) => ({
  fontSize: 20,
  color: active ? theme.radioButtonActiveTextColor : theme.radioButtonTextColor,
}));
const RadioButton: FC<RadioButtonProps> = ({ children, active, onPress }) => {
  return (
    <Pressable active={active} onPress={() => onPress?.()}>
      <Text active={active}>{children}</Text>
    </Pressable>
  );
};
export default RadioButton;
