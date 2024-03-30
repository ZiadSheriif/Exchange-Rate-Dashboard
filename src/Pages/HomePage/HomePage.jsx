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
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

// styles
import { LinkStyled } from "./HomePage.styled";

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
            Welcome to Exchange Rate Dashboard
          </Typography>
          <Typography variant="body2">
            Click on the card to navigate to the Dashboard.
          </Typography>
          <LinkStyled to="/dashboard">Go to Dashboard</LinkStyled>
        </CardContent>
      </Card>
    </Box>
  );
};

export default HomePage;
