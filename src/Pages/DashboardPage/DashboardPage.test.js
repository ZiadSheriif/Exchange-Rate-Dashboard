import { render, fireEvent } from "@testing-library/react";
import DashboardPage from "./DashboardPage";

describe("DashboardPage", () => {
  test("renders Line Chart and Bar Chart buttons in edit mode", () => {
    const { getByText } = render(<DashboardPage mode="edit" />);

    // Check if both Show Line Chart and Show Bar Chart buttons are rendered
    expect(getByText("Show Line Chart")).toBeInTheDocument();
    expect(getByText("Show Bar Chart")).toBeInTheDocument();
  });

  test("toggles Line Chart visibility", () => {
    const { getByText } = render(<DashboardPage mode="edit" />);

    // Click on Show Line Chart button to toggle visibility
    fireEvent.click(getByText("Show Line Chart"));

    // Check if the button changes to Hide Line Chart
    expect(getByText("Hide Line Chart")).toBeInTheDocument();
  });

  test("toggles Bar Chart visibility", () => {
    const { getByText } = render(<DashboardPage mode="edit" />);

    // Click on Show Bar Chart button to toggle visibility
    fireEvent.click(getByText("Show Bar Chart"));

    // Check if the button changes to Hide Bar Chart
    expect(getByText("Hide Bar Chart")).toBeInTheDocument();
  });

  // test("renders Line Chart and Bar Chart in view mode", () => {
  //   const { getByTestId } = render(<DashboardPage mode="view" />);

  //   // Check if both Line Chart and Bar Chart are rendered
  //   expect(getByTestId("line-chart")).toBeInTheDocument();
  //   expect(getByTestId("bar-chart")).toBeInTheDocument();
  // });
});
