/**
 * geLast30DaysUSDEUR Function
 *
 * This function fetches the exchange rates for USD to EUR for the last 30 days using the provided dataFetch function.
 * It uses the axios library to send a GET request to the "timeseries" endpoint of the API.
 * The API key, start date, end date, symbols, and base are passed as query parameters in the URL.
 * The "Content-Language" header is set to "en".
 *
 * @function
 * @param {Function} dataFetch - The function used to fetch the data.
 * @param {Object} objectData - An optional object that can be used to pass additional data to the dataFetch function.
 *
 * @example
 * geLast30DaysUSDEUR(fetchData);
 */
import axios from "src/API/axios";
require('dotenv').config();
var APIKEY = process.env.VITE_API_KEY;
import formatDate from "src/Utils/conversionDate";

const geLast30DaysUSDEUR = (dataFetch, objectData = {}) => {
  let endDate = new Date();
  let startDate = new Date();
  startDate.setDate(endDate.getDate() - 30);

  // format the date
  startDate = formatDate(startDate);
  endDate = formatDate(endDate);

  dataFetch({
    axiosInstance: axios,
    method: "GET",
    url: `timeseries?apikey=${APIKEY}&start_date=${startDate}&end_date=${endDate}&symbols=EUR&base=USD`,
    requestConfig: {
      headers: {
        "Content-Language": "en",
      },
    },
  });
};

export default geLast30DaysUSDEUR;