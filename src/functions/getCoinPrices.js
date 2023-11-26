import axios from "axios";

const API_URL = "https://api.coingecko.com/api/v3/coins";

export const getCoinPrices = (id, days, priceType) => {
  const prices = axios
    .get(
      `${API_URL}/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
    )
    .then((response) => {
      if (priceType === "market_caps") {
        return response.data.market_caps;
      } else if (priceType === "total_volumes") {
        return response.data.total_volumes;
      } else {
        return response.data.prices;
      }
    })
    .catch((error) => {
      console.log("ERROR>>>", error);
    });

  if (prices) {
    return prices;
  } else {
    return;
  }
};
