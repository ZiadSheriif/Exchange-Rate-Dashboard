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
