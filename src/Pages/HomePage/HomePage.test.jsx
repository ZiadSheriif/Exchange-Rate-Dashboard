import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Provides routing context for testing
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

  test("navigates to dashboard on clicking the link", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/"]}>
        <HomePage />
      </MemoryRouter>
    );

    // Click on the link to navigate to the dashboard
    fireEvent.click(getByText("Go to Dashboard"));

    // Check if the URL changes to '/dashboard'
    expect(window.location.pathname).toBe("/dashboard");
  });
});
