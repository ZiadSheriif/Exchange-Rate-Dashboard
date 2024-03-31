import React from "react";
import { render, screen } from "@testing-library/react";
import DashboardPage from "./DashboardPage";

describe("DashboardPage", () => {
  // test('renders without crashing', () => {
  //   render(<DashboardPage mode="view" />);
  // });

  // test('renders the correct elements in "view" mode', () => {
  //   render(<DashboardPage mode="view" />);
  //   expect(screen.queryByText('Show Line Chart')).toBeNull();
  //   expect(screen.queryByText('Show Bar Chart')).toBeNull();
  //   expect(screen.queryByText('Hide Line Chart')).toBeNull();
  //   expect(screen.queryByText('Hide Bar Chart')).toBeNull();
  // });

  test('renders the correct elements in "edit" mode', () => {
    render(<DashboardPage mode="edit" />);
    expect(screen.getByText("Hide Line Chart")).toBeInTheDocument();
    expect(screen.getByText("Hide Bar Chart")).toBeInTheDocument();
  });
});
