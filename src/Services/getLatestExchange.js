import axios from "src/API/axios";
const APIKEY = import.meta.env.VITE_API_KEY;

const getLatestExchangeRate = (dataFetch, symbols, base = "USD") => {
  dataFetch({
    axiosInstance: axios,
    method: "GET",
    url: `/latest?apikey=${APIKEY}&symbols=${symbols}&base=${base}`,
    requestConfig: {
      headers: {
        "Content-Language": "en",
      },
    },
  });
};

export default getLatestExchangeRate;
