import React, { useEffect, useState } from "react";

// Chart imports
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2, 3, 9, 10, 15, 20, 25, 30],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
