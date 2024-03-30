import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Header from "src/Components/Header/Header";

// Pages
import HomePage from "src/Pages/HomePage/HomePage";
import DashboardPage from "src/Pages/DashboardPage/DashboardPage";

function App() {
  const [mode, setMode] = useState("view");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "view" ? "edit" : "view"));
  };
  return (
    <>
      <Router>
        <Header mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
