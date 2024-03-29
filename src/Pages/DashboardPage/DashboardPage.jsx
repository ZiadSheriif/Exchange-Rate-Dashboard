import React, { useState, useEffect } from "react";
// import { LineChart, BarChart } from "@mui/charts-material";
import { LineChart, BarChart } from 'recharts';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function DashboardPage() {
  const [mode, setMode] = useState("view");
  const [lineChartData, setLineChartData] = useState({});
  const [barChartData, setBarChartData] = useState({});
  const [lineChartVisible, setLineChartVisible] = useState(true);
  const [barChartVisible, setBarChartVisible] = useState(true);

  useEffect(() => {
    // Fetch data from the API and set the chart data
  }, []);

  const toggleMode = () => {
    setMode(mode === "view" ? "edit" : "view");
  };

  const hideBox = (box) => {
    if (box === "line") {
      setLineChartVisible(false);
    } else if (box === "bar") {
      setBarChartVisible(false);
    }
  };

  const addBox = (box) => {
    if (box === "line") {
      setLineChartVisible(true);
    } else if (box === "bar") {
      setBarChartVisible(true);
    }
  };

  return (
    <Box>
      <Button variant="contained" onClick={toggleMode}>
        Toggle Mode
      </Button>
      {mode === "edit" && (
        <Box>
          <Button variant="contained" onClick={() => hideBox("line")}>
            Hide Line Chart
          </Button>
          <Button variant="contained" onClick={() => hideBox("bar")}>
            Hide Bar Chart
          </Button>
          <Button variant="contained" onClick={() => addBox("line")}>
            Add Line Chart
          </Button>
          <Button variant="contained" onClick={() => addBox("bar")}>
            Add Bar Chart
          </Button>
        </Box>
      )}
      {lineChartVisible && <LineChart data={lineChartData} />}
      {barChartVisible && <BarChart data={barChartData} />}
    </Box>
  );
}

export default DashboardPage;
