import React from "react";
import { render, screen } from "@testing-library/react";
import DashboardPage from "./DashboardPage";

describe("DashboardPage", () => {
  test('renders the correct elements in "edit" mode', () => {
    render(<DashboardPage mode="edit" />);
    expect(screen.getByText("Hide Line Chart")).toBeInTheDocument();
    expect(screen.getByText("Hide Bar Chart")).toBeInTheDocument();
  });
});
