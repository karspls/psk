import { CryptoCurrencyEntry } from "@/utils/useCryptoCurrencies";
import { FiatCurrencyEntry } from "@/utils/useFiatCurrencies";
import usePairPrice from "@/utils/usePairPrice";
import { FC, Suspense } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import usei18n from "../usei18n";

const ResultText = styled.Text(() => ({
  fontSize: 40,
}));

export type ResultProps = {
  value: number | string;
  fiat: FiatCurrencyEntry;
  crypto: CryptoCurrencyEntry;
  mode: "fromCryptoToFiat" | "fromFiatToCrypto";
};
const UnsuspendedResult: FC<ResultProps> = ({ crypto, fiat, mode, value }) => {
  const { data: price } = usePairPrice(crypto.id, fiat.id);
  return (
    <ResultText numberOfLines={1}>
      {Number(value) * (mode === "fromCryptoToFiat" ? price : 1 / price)}
    </ResultText>
  );
};
const Result: FC<ResultProps> = (props) => {
  const i18n = usei18n();
  return (
    <Suspense fallback={<Text>{i18n("loading")}</Text>}>
      <UnsuspendedResult {...props} />
    </Suspense>
  );
};

export default Result;
