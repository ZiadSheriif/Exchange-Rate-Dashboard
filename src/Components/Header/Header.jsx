/**
 * Header Component
 *
 * This component represents the header of the application. It includes a title and a toggle button.
 * The toggle button allows the user to switch between "view" and "edit" modes.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.mode - The current mode of the application, either "view" or "edit".
 * @param {function} props.toggleMode - The function to call when the toggle button is clicked.
 *
 * @example
 * return (
 *   <Header mode="view" toggleMode={toggleModeFunction} />
 * )
 */
import React from "react";

// styles
import { HeaderContainer, ToggleButton } from "./Header.styled";

const Header = ({ mode, toggleMode }) => {
  return (
    <HeaderContainer>
      <h3>Exchange Rate Dashboard</h3>
      <ToggleButton onClick={toggleMode}>
        {mode === "view" ? "Switch to Edit Mode" : "Switch to View Mode"}
      </ToggleButton>
    </HeaderContainer>
  );
};

export default Header;
