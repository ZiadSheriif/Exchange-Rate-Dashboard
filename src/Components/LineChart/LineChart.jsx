/**
 * LineChart Component
 *
 * This component fetches the exchange rates for USD to EUR for the last 30 days and displays them in a line chart.
 *
 * @component
 * @example
 * return (
 *   <LineChart />
 * )
 */

import React, { useEffect, useState } from "react";

// Chart imports
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
import { Line } from "react-chartjs-2";

// useFetch function
import useFetchFunction from "src/Hooks/useFetchFunction";
import geLast30DaysUSDEUR from "src/Services/getExchangeRates";

// mock data
import { mockLineChartData } from "src/Data/mockLineChartData";
// import components
import ProgressBar from "src/Components/ProgressBar/ProgressBar";

// styled components
import { ProgressWrapper } from "./LineChart.styled";

const LineChart = () => {
  // Fetching the exchange rates
  const [response, error, isLoading, fetchData] = useFetchFunction();

  // State for storing the chart data
  const [data, setData] = useState(mockLineChartData);

  // Fetching the exchange rates when the component mounts
  useEffect(() => {
    geLast30DaysUSDEUR(fetchData);
  }, []);

  // Updating the chart data when the exchange rates change
  useEffect(() => {
    if (error) {
      console.log(error);
    } else if (response !== undefined && response.rates) {
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

  // Chart options
  const options = {
    scales: {
      y: {
        grid: {
          color: "gray",
        },
        beginAtZero: true,
      },
    },
  };

  // Rendering the chart or a loading message
  return isLoading && data !== undefined ? (
    <ProgressWrapper>
      <ProgressBar testId="progress-wrapper" />
    </ProgressWrapper>
  ) : (
    <Line data={data} options={options} />
  );
};

export default LineChart;
