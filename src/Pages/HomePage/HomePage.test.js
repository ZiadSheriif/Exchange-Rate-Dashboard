import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HomePage from "./HomePage";

describe("HomePage", () => {
  test("renders welcome message and link to dashboard", () => {
    const { getByText } = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    // Check if welcome message and link are rendered
    expect(getByText("Welcome to Exchange Rate Dashboard")).toBeInTheDocument();
    expect(
      getByText("Click on the card to navigate to the Dashboard.")
    ).toBeInTheDocument();
    expect(getByText("Go to Dashboard")).toBeInTheDocument();
  });
});
