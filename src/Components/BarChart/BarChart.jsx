/**
 * BarChart Component
 *
 * This component fetches the latest exchange rates for EGP, EUR, and GBP against USD and displays them in a bar chart.
 *
 * @component
 * @example
 * return (
 *   <BarChart />
 * )
 */

import React, { useEffect, useState } from "react";

// Chart imports
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
import { Bar } from "react-chartjs-2";

// mock data
import { mockBarChartData } from "src/Data/mockBarChartData";

// useFetch function
import useFetchFunction from "src/Hooks/useFetchFunction";
import getLastestExchangeRates from "src/Services/getLatestExchange";

// import components
import ProgressBar from "src/Components/ProgressBar/ProgressBar";

// styled components
import { ProgressWrapper } from "./BarChart.styled";

const BarChart = () => {
  // Fetching exchange rates for EGP, EUR, and GBP
  const [EGP, errorEGP, isLoadingEGP, fetchDataEGP] = useFetchFunction();
  const [EUR, errorEUR, isLoadingEUR, fetchDataEUR] = useFetchFunction();
  const [GBP, errorGBP, isLoadingGBP, fetchDataGBP] = useFetchFunction();

  // State for storing the chart data
  const [data, setData] = useState(mockBarChartData);

  // Fetching the exchange rates when the component mounts
  useEffect(() => {
    getLastestExchangeRates(fetchDataEGP, "EGP");
    getLastestExchangeRates(fetchDataEUR, "EUR");
    getLastestExchangeRates(fetchDataGBP, "GBP");
  }, []);

  // Updating the chart data when the exchange rates change
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
            label: "USD To EGP",
            data: [EGP?.rates?.EGP, 0, 0],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
          {
            label: "USD To EUR",
            data: [0, EUR?.rates?.EUR, 0],
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
          {
            label: "USD To GBP",
            data: [0, 0, GBP?.rates?.GBP],
            backgroundColor: "rgba(255, 206, 86, 0.2)",
            borderColor: "rgba(255, 206, 86, 1)",
            borderWidth: 1,
          },
        ],
      });
    }
  }, [EGP, EUR, GBP]);

  // Chart options
  const options = {
    scales: {
      x: {
        grid: {
          color: "rgba(255, 99, 132, 0.2)",
        },
      },
      y: {
        grid: {
          color: "rgba(255, 99, 132, 0.2)",
        },
        beginAtZero: true,
      },
    },
  };

  // Rendering the chart or a loading message
  return isLoadingEGP ||
    isLoadingEUR ||
    isLoadingGBP ||
    data?.datasets?.[0]?.data?.length === 0 ? (
    <ProgressWrapper>
      <ProgressBar />
    </ProgressWrapper>
  ) : (
    <Bar data={data} options={options} />
  );
};

export default BarChart;
