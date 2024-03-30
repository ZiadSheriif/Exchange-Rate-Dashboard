/**
 * getLatestExchangeRate Function
 *
 * This function fetches the latest exchange rates for the specified symbols to the specified base using the provided dataFetch function.
 * It uses the axios library to send a GET request to the "latest" endpoint of the API.
 * The API key, symbols, and base are passed as query parameters in the URL.
 * The "Content-Language" header is set to "en".
 *
 * @function
 * @param {Function} dataFetch - The function used to fetch the data.
 * @param {string} symbols - The symbols for which to fetch the exchange rates.
 * @param {string} [base="USD"] - The base to which the exchange rates are relative.
 *
 * @example
 * getLatestExchangeRate(fetchData, "EUR,GBP");
 */
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
