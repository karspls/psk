import { FC, ReactElement, useRef } from "react";
import { Text } from "react-native";
import { Dropdown, IDropdownRef } from "react-native-element-dropdown";
import styled, { useTheme } from "styled-components/native";

export type DropdownButtonProps<TItemType> = {
  items: TItemType[];
  highlighted: boolean;
  selectedValue: TItemType | null;
  onChange: (item: TItemType) => void;
};
const Chevron = styled.Image<{ isRotated?: boolean }>(({ isRotated }) => ({
  height: 24,
  width: 24,
  transform: isRotated ? "rotate(180deg)" : "rotate(0deg)",
}));
const Wrap = styled.Pressable<{ hightlighed?: boolean }>(
  ({ theme, hightlighed }) => ({
    zIndex: 3,
    elevation: "3",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 33,
    position: "relative",
    backgroundColor: hightlighed
      ? theme.radioButtonActiveBackgroundColor
      : theme.radioButtonBackgroundColor,
  })
);

const DropdownItemWrap = styled.View<{ active?: boolean }>(
  ({ active, theme }) => ({
    borderRadius: 7,
    paddingVertical: 8,
    marginBottom: 12,
    marginRight: 8,
    minWidth: 241,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
    color: active ? theme.textInverted : theme.text,
    backgroundColor: active ? theme.dropdownActiveItemBg : theme.dropdownItemBg,
  })
);

export const DropdownItem: FC<{
  active?: boolean;
  text: string;
}> = ({ active, text }) => {
  return (
    <DropdownItemWrap active={active}>
      <Text>{text}</Text>
    </DropdownItemWrap>
  );
};

const DropdownButton = <TItemType extends { id: any; name: any; symbol: any }>({
  items,
  highlighted,
  selectedValue,
  onChange,
}: DropdownButtonProps<TItemType>): ReactElement | null => {
  const dropdownRef = useRef<IDropdownRef>(null);
  const theme = useTheme();
  return (
    <>
      <Wrap
        hightlighed={highlighted}
        onPress={() => {
          dropdownRef.current?.open();
        }}
      >
        <Chevron
          isRotated={highlighted}
          source={
            highlighted
              ? require("@/assets/images/chevron-inverted.png")
              : require("@/assets/images/chevron-down.png")
          }
        />
      </Wrap>
      <Dropdown<TItemType>
        ref={dropdownRef}
        data={items}
        mode="modal"
        dropdownPosition="auto"
        labelField="name"
        valueField="id"
        activeColor="transparent"
        iconStyle={{
          /**при display: none дропдаун просто не открывается  */ opacity: 0,
        }}
        containerStyle={{
          maxHeight: 500,
          minWidth: 300,
          paddingVertical: 12,
          backgroundColor: theme.dropdownBg,
          paddingLeft: 12,
          paddingRight: 12,
          borderRadius: 16,
        }}
        style={{ position: "absolute" }}
        renderItem={(item, selected) => (
          <DropdownItem text={item.name} key={item.id} active={selected} />
        )}
        value={selectedValue}
        onChange={(item) => {
          onChange(item);
        }}
      />
    </>
  );
};

export default DropdownButton;
