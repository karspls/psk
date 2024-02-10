import { CryptoCurrencyEntry } from "@/utils/useCryptoCurrencies";
import { FiatCurrencyEntry } from "@/utils/useFiatCurrencies";
import usePairPrice from "@/utils/usePairPrice";
import { FC, Suspense } from "react";
import styled from "styled-components/native";
import usei18n from "../usei18n";

export type RatesProps = {
  fiat: FiatCurrencyEntry;
  crypto: CryptoCurrencyEntry;
  mode: "cryptoToFiat" | "fiatToCrypto";
};

const RatesText = styled.Text(({ theme }) => ({
  fontSize: 16,
  color: theme.ratesColor,
}));
const UnsuspendedRates: FC<RatesProps> = ({ crypto, fiat, mode }) => {
  const { data: price } = usePairPrice(crypto.id, fiat.id);
  const text =
    mode === "cryptoToFiat"
      ? `1 ${fiat.symbol} = ${1 / price} ${crypto.symbol}`
      : `1 ${crypto.symbol} = ${price} ${fiat.symbol}`;
  return <RatesText>{text}</RatesText>;
};

const Rates: FC<RatesProps> = (props) => {
  const i18n = usei18n();
  return (
    <Suspense fallback={<RatesText>{i18n("ratesLoadingText")}</RatesText>}>
      <UnsuspendedRates {...props} />
    </Suspense>
  );
};
export default Rates;
