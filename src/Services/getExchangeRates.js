import axios from "src/API/axios";
const APIKEY = import.meta.env.VITE_API_KEY;
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
