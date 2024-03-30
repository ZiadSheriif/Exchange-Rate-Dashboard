// react imports
import React, { useState } from "react";

// styles
import { HeaderContainer,ToggleButton } from "./Header.styled";

/**
 * Header component for the application
 * This component contains the header of the application
 *
 * @returns {JSX.Element}
 */
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
