/**
 * HomePage Page
 *
 * This page represents the home page of the application. It includes a welcome message and a link to the dashboard page.
 *
 * @page
 *
 * @example
 * return (
 *   <HomePage />
 * )
 */
import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

const HomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            Welcome to the Home Page
          </Typography>
          <Typography variant="body2">
            Click on the card to navigate to the Dashboard.
          </Typography>
          <Link to="/dashboard">Go to Dashboard</Link>
        </CardContent>
      </Card>
    </Box>
  );
};

export default HomePage;