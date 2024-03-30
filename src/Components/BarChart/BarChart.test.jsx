import { render, screen } from "@testing-library/react";
import BarChart from "./BarChart";

test("renders BarChart component without crashing", () => {
  render(<BarChart />);
  const linkElement = screen.getByText(/...Loading/i);
  expect(linkElement).toBeInTheDocument();
});
