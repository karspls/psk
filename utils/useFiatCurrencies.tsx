import fetch from "node-fetch";
import getApiKeyHeaders from "./getApiKeyHeaders";
import { useSuspenseQuery } from "@tanstack/react-query";

export const FiatCurrency = ["USD"] as const;

export type FiatCurrencyEntry = {
  id: number;
  name: string;
  sign: string;
  symbol: string;
};
const fetchFiatCurrencies = async () => {
  const resp = await fetch(
    "https://pro-api.coinmarketcap.com/v1/fiat/map?start=1&limit=100",
    {
      headers: {
        ...getApiKeyHeaders(),
      },
    }
  );
  const json: { data: FiatCurrencyEntry[] } = await resp.json();

  return json.data;
};
const useFiatCurrencies = () =>
  useSuspenseQuery({
    queryKey: ["currencies", "fiat"],
    queryFn: fetchFiatCurrencies,
  });

export default useFiatCurrencies;
