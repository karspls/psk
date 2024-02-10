import { CMC_API_KEY } from "@env";

export default function getApiKeyHeaders() {
  return { "X-CMC_PRO_API_KEY": CMC_API_KEY };
}
