import { FC, useState } from "react";
import RadioButton from "./button";
import DropdownButton from "./dropdown";
import useCryptoCurrencies, {
  CryptoCurrencyEntry,
} from "@/utils/useCryptoCurrencies";
import useFiatCurrencies, {
  FiatCurrencyEntry,
} from "@/utils/useFiatCurrencies";
import Rates from "./Rates";
import styled from "styled-components/native";
import CalculatorBlock from "./CalculatorBlock";
import Reverser from "./Reverser";
import Result from "./Result";

const Root = styled.View(({ theme }) => ({
  marginHorizontal: 9,
  paddingVertical: 16,
  borderRadius: 35,
  borderWidth: 2,
  marginTop: 35,
  height: 498,
  display: "flex",
  borderColor: theme.stroke,
}));

const CalculatorBody: FC = () => {
  const { data: fiat } = useFiatCurrencies();
  const { data: crypto } = useCryptoCurrencies();
  const [value, setValue] = useState<string>("");
  const onInputChange = (v: string) => setValue(v.replaceAll(/\D/g, ""));
  const [reversed, setReversed] = useState<boolean>(false);
  const [selectedFiat, setSelectedFiat] = useState<FiatCurrencyEntry>(fiat[0]);
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoCurrencyEntry>(
    crypto[0]
  );

  const shouldShowTopDropdown = fiat.length > 3;

  const top = (
    <CalculatorBlock
      result={
        <Result
          value={value}
          crypto={selectedCrypto}
          fiat={selectedFiat}
          mode={reversed ? "fromCryptoToFiat" : "fromFiatToCrypto"}
        />
      }
      onInputChange={onInputChange}
      isInput={!reversed}
      value={String(value)}
      buttons={fiat.slice(0, 3).map((c) => (
        <RadioButton
          active={c.id === selectedFiat.id}
          key={c.id}
          onPress={() => setSelectedFiat(c)}
        >
          {c.symbol}
        </RadioButton>
      ))}
      buttonsRight={
        shouldShowTopDropdown && (
          <DropdownButton<FiatCurrencyEntry>
            selectedValue={selectedFiat}
            onChange={(fiat) => setSelectedFiat(fiat)}
            highlighted={fiat.indexOf(selectedFiat) >= 3}
            items={fiat}
          />
        )
      }
      rates={
        <Rates
          mode="fiatToCrypto"
          crypto={selectedCrypto}
          fiat={selectedFiat}
        />
      }
    />
  );

  const bottom = (
    <CalculatorBlock
      result={
        <Result
          value={value}
          crypto={selectedCrypto}
          fiat={selectedFiat}
          mode={reversed ? "fromCryptoToFiat" : "fromFiatToCrypto"}
        />
      }
      onInputChange={onInputChange}
      isInput={reversed}
      value={String(value)}
      buttons={crypto.slice(0, 3).map((c) => (
        <RadioButton
          active={c.id === selectedCrypto.id}
          key={c.id}
          onPress={() => setSelectedCrypto(c)}
        >
          {c.symbol}
        </RadioButton>
      ))}
      buttonsRight={
        <DropdownButton<CryptoCurrencyEntry>
          selectedValue={selectedCrypto}
          highlighted={crypto.indexOf(selectedCrypto) >= 3}
          items={crypto}
          onChange={(cr) => setSelectedCrypto(cr)}
        />
      }
      rates={
        <Rates
          mode="cryptoToFiat"
          crypto={selectedCrypto}
          fiat={selectedFiat}
        />
      }
    />
  );

  return (
    <Root>
      {reversed ? bottom : top}
      <Reverser onReverse={() => setReversed((old) => !old)} />
      {reversed ? top : bottom}
    </Root>
  );
};

export default CalculatorBody;
