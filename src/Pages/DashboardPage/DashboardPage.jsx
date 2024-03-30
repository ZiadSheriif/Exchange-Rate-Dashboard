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
import {
  ChartContainer,
  Container,
  Button,
  ButtonContainer,
} from "./DashboardPage.styled";

// local storage hook
import useLocalStorage from "src/Hooks/useLocalStorage";

const DashboardPage = ({ mode }) => {
  const [lineChartVisible, setLineChartVisible] = useLocalStorage(
    "lineChartVisible",
    true
  );
  const [barChartVisible, setBarChartVisible] = useLocalStorage(
    "barChartVisible",
    true
  );

  const toggleLineChart = () => {
    setLineChartVisible((prev) => !prev);
    updateBoxCount();
  };

  const toggleBarChart = () => {
    setBarChartVisible((prev) => !prev);
    updateBoxCount();
  };

  return (
    <Container mode={mode}>
      {mode === "edit" && (
        <ButtonContainer>
          {!lineChartVisible && (
            <Button onClick={toggleLineChart}>Show Line Chart</Button>
          )}
          {!barChartVisible && (
            <Button onClick={toggleBarChart}>Show Bar Chart</Button>
          )}

          {lineChartVisible && (
            <Button onClick={toggleLineChart}>Hide Line Chart</Button>
          )}
          {barChartVisible && (
            <Button onClick={toggleBarChart}>Hide Bar Chart</Button>
          )}
        </ButtonContainer>
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
    </Container>
  );
};

export default DashboardPage;
