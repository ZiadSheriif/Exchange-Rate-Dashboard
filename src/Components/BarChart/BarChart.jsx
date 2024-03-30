import React, { useEffect, useState } from "react";

// Chart imports
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
import { Bar } from "react-chartjs-2";

// useFetch function
import useFetchFunction from "src/Hooks/useFetchFunction";
import getLastestExchangeRates from "src/Services/getLatestExchange";

const BarChart = () => {
  const [EGP, errorEGP, isLoadingEGP, fetchDataEGP] = useFetchFunction();
  const [EUR, errorEUR, isLoadingEUR, fetchDataEUR] = useFetchFunction();
  const [GBP, errorGBP, isLoadingGBP, fetchDataGBP] = useFetchFunction();

  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    getLastestExchangeRates(fetchDataEGP, "EGP");
    getLastestExchangeRates(fetchDataEUR, "EUR");
    getLastestExchangeRates(fetchDataGBP, "GBP");
  }, []);

  useEffect(() => {
    if (errorEGP || errorEUR || errorGBP) {
    } else if (
      EGP !== undefined &&
      EGP?.rates &&
      EUR !== undefined &&
      EUR?.rates &&
      GBP !== undefined &&
      GBP?.rates
    ) {
      setData({
        labels: ["EGP", "EUR", "GBP"],
        datasets: [
          {
            label: "USD Exchange Rates",
            data: [EGP?.rates?.EGP, EUR?.rates?.EUR, GBP?.rates?.GBP],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
            ],
            borderWidth: 1,
          },
        ],
      });
    }
  }, [EGP, EUR, GBP]);

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return isLoadingEGP ||
    isLoadingEUR ||
    isLoadingGBP ||
    data?.datasets?.[0]?.data?.length === 0 ? (
    "...Loading"
  ) : (
    <Bar data={data} options={options} />
  );
};

export default BarChart;
