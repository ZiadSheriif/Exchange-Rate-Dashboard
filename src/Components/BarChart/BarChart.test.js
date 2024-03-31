import { render } from "@testing-library/react";
import BarChart from "./BarChart";

jest.mock("src/Hooks/useFetchFunction", () => () => [
  null, // no response data
  null, // no error
  true, // loading state
  jest.fn(), // mock fetchData function
]);

jest.mock("src/Data/mockBarChartData", () => ({
  mockBarChartData: {
    labels: [],
    datasets: [],
  },
}));

describe("BarChart", () => {
  test("renders loading indicator when in loading state", () => {
    const { getByTestId } = render(<BarChart />);

    // Check if the loading indicator is rendered
    expect(getByTestId("progress-wrapper")).toBeInTheDocument();
  });
});
