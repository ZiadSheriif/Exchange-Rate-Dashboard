import { render, screen } from "@testing-library/react";
import LineChart from "./LineChart";

test("renders LineChart component without crashing", () => {
  render(<LineChart />);
  const linkElement = screen.getByText(/...Loading/i);
  expect(linkElement).toBeInTheDocument();
});
