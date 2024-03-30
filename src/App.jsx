/**
 * App Component
 *
 * This is the root component of the application. It sets up the routing for the application and renders the Header, HomePage, and DashboardPage components.
 * It also maintains a state variable "mode" which can be either "view" or "edit". The "mode" state is passed to the Header and DashboardPage components.
 * The "toggleMode" function is used to switch the "mode" between "view" and "edit".
 *
 * @component
 *
 * @example
 * return (
 *   <App />
 * )
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Header from "src/Components/Header/Header";

// Pages
import HomePage from "src/Pages/HomePage/HomePage";
import DashboardPage from "src/Pages/DashboardPage/DashboardPage";

// hooks
import useLocalStorage from "src/Hooks/useLocalStorage";

function App() {
  const [mode, setMode] = useLocalStorage("mode", "edit");

  const toggleMode = () => {
    if (mode === "view") {
      setMode("edit");
    }
    if (mode === "edit") {
      setMode("view");
    }
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
