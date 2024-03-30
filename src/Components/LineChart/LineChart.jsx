// import reacts
import React, { useEffect, useState } from "react";

// chart imports
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
import { Line } from "react-chartjs-2";

// use fetch to get the data
import useFetchFunction from "src/Hooks/useFetchFunction";
import geLast30DaysUSDEUR from "src/Services/getExchangeRates";

const LineChart = () => {
  const [response, error, isLoading, fetchData] = useFetchFunction();
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    geLast30DaysUSDEUR(fetchData);
  }, []);

  useEffect(() => {
    if (error) {
      console.log(error);
    } else if (response && response.rates) {
      setData({
        labels: Object.keys(response.rates),
        datasets: [
          {
            label: "USD to EUR",
            data: Object.values(response.rates).map((rate) => rate.EUR),
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.5,
            backgroundColor: "rgba(255, 0, 0.2)",
          },
        ],
      });
    }
  }, [response]);

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return isLoading && data !== undefined ? (
    "...Loading"
  ) : (
    <Line data={data} options={options} />
  );
};

export default LineChart;
