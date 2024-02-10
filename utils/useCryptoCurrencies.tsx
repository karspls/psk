import fetch from "node-fetch";
import { FiatCurrency } from "./useFiatCurrencies";
import getApiKeyHeaders from "./getApiKeyHeaders";
import { useSuspenseQuery } from "@tanstack/react-query";

const fetchCurrencies = async () => {
  const r = await fetch(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    {
      headers: {
        ...getApiKeyHeaders(),
      },
    }
  );
  const json = (await r.json()) as { data: CryptoCurrencyEntry[] };
  return json.data;
};

const useCryptoCurrencies = () =>
  useSuspenseQuery({
    queryKey: ["currencies", "crypto"],
    queryFn: fetchCurrencies,
  });
export default useCryptoCurrencies;
export type CryptoCurrencyEntry = {
  circulating_supply: number;
  cmc_rank: number;
  /**ISO 8601 */
  date_added: string;
  id: number;
  infinite_supply: boolean;
  /**ISO 8601 */
  last_updated: string;
  max_supply: number;
  name: string;
  num_market_pairs: number;
  platform: null;
  quote: Record<(typeof FiatCurrency)[number], CurrencyQuote>;
  self_reported_circulating_supply: null;
  self_reported_market_cap: null;
  slug: string;
  symbol: string;
  tags: string[];
  total_supply: number;
  tvl_ratio: null;
};
export type CurrencyQuote = {
  fully_diluted_market_cap: number;
  /**ISO 8601 */
  last_updated: string;
  market_cap: number;
  market_cap_dominance: number;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_30d: number;
  percent_change_60d: number;
  percent_change_7d: number;
  percent_change_90d: number;
  price: number;
  tvl: null;
  volume_24h: number;
  volume_change_24h: number;
};
