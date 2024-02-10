import { useSuspenseQuery } from "@tanstack/react-query";
import getApiKeyHeaders from "./getApiKeyHeaders";

/** Возвращает цену переданной криптовалюты в переданной валюте */
async function fetchPairPrice(cryptoId: number, fiatId: number) {
  const reps = await fetch(
    `https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=${cryptoId}&convert_id=${fiatId}`,
    {
      headers: {
        ...getApiKeyHeaders(),
      },
    }
  );
  const { data } = await reps.json();
  const p = data[cryptoId].quote[fiatId].price;
  return p as number;
}

const usePairPrice = (cryptoId: number, fiatId: number) =>
  useSuspenseQuery({
    queryKey: ["price", cryptoId, fiatId],
    queryFn: () => fetchPairPrice(cryptoId, fiatId),
  });

export default usePairPrice;
