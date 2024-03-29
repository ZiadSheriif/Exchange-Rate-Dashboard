import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "src/Pages/HomePage/HomePage";
import DashboardPage from "src/Pages/DashboardPage/DashboardPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
