import { FC, ReactNode } from "react";
import { KeyboardTypeOptions, Platform, View } from "react-native";
import styled from "styled-components/native";

const Wrap = styled.View<{ isInput: boolean }>(({ isInput, theme }) => ({
  display: "flex",
  flex: 1,
  flexDirection: isInput ? "column" : "column-reverse",
  borderColor: theme.stroke,
}));
const Buttons = styled.View(() => ({
  marginHorizontal: 15,
  display: "flex",
  flexDirection: "row",
  gap: 12,
}));
const ButtonsRight = styled.View(() => ({
  flex: 1,
  paddingLeft: 16,
}));
const InputWrapper = styled.View(() => ({
  marginHorizontal: 42,
  flex: 1,
  gap: 25,
  display: "flex",
  flexDirection: "column",
}));
const Input = styled.TextInput(() => ({
  fontSize: 40,
}));

export type CalculatorBlockProps = {
  isInput: boolean;
  value: string;
  onInputChange?: (nextValue: string) => void;
  buttons: ReactNode;
  buttonsRight: ReactNode;
  rates: ReactNode;
  result: ReactNode;
};
const CalculatorBlock: FC<CalculatorBlockProps> = ({
  isInput,
  value,
  onInputChange,
  buttons,
  buttonsRight,
  rates,
  result,
}) => {
  return (
    <Wrap isInput={isInput}>
      <Buttons>
        {buttons}
        <ButtonsRight>{buttonsRight}</ButtonsRight>
      </Buttons>
      <InputWrapper>
        <View />
        {isInput ? (
          <Input
            keyboardType={Platform.select<KeyboardTypeOptions>({
              ios: "number-pad",
              android: "numeric",
            })}
            value={value}
            onChangeText={(v) => onInputChange?.(v)}
          />
        ) : (
          result
        )}
        {rates}
      </InputWrapper>
    </Wrap>
  );
};

export default CalculatorBlock;
