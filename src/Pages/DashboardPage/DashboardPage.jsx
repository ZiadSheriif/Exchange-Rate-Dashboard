/**
 * DashboardPage Page
 *
 * This page represents the dashboard page of the application. It includes a line chart and a bar chart.
 * In "edit" mode, the user can add or remove the charts. In "view" mode, the user can only view the charts.
 *
 * @page
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.mode - The current mode of the application, either "view" or "edit".
 *
 * @example
 * return (
 *   <DashboardPage mode="edit" />
 * )
 */
import React, { useState } from "react";
import LineChart from "src/Components/LineChart/LineChart";
import BarChart from "src/Components/BarChart/BarChart";

// styles
import { ChartContainer } from "./DashboardPage.styled";

const DashboardPage = ({ mode }) => {
  const [lineChartVisible, setLineChartVisible] = useState(true);
  const [barChartVisible, setBarChartVisible] = useState(true);

  const hideBox = (boxType) => {
    if (boxType === "line") setLineChartVisible(false);
    if (boxType === "bar") setBarChartVisible(false);
  };

  const addBox = (boxType) => {
    if (boxType === "line") setLineChartVisible(true);
    if (boxType === "bar") setBarChartVisible(true);
  };

  return (
    <div>
      {mode === "edit" && (
        <div>
          {lineChartVisible && (
            <button onClick={() => hideBox("line")}>Hide Line Chart</button>
          )}
          {!lineChartVisible && (
            <button onClick={() => addBox("line")}>Add Line Chart</button>
          )}
          {barChartVisible && (
            <button onClick={() => hideBox("bar")}>Hide Bar Chart</button>
          )}
          {!barChartVisible && (
            <button onClick={() => addBox("bar")}>Add Bar Chart</button>
          )}
        </div>
      )}
      {mode === "view" && (
        <div>
          {lineChartVisible && (
            <ChartContainer>
              <LineChart />
            </ChartContainer>
          )}
          {barChartVisible && (
            <ChartContainer>
              <BarChart />
            </ChartContainer>
          )}
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
