import { render } from "@testing-library/react";
import LineChart from "./LineChart";

jest.mock("src/Hooks/useFetchFunction", () => () => [
  null, // no response data
  null, // no error
  true, // loading state
  jest.fn(), // mock fetchData function
]);

jest.mock("src/Data/mockLineChartData", () => ({
  mockLineChartData: {
    labels: [],
    datasets: [],
  },
}));

describe("LineChart", () => {
  test("renders loading indicator when in loading state", () => {
    const { getByTestId } = render(<LineChart />);

    // Check if the loading indicator is rendered
    expect(getByTestId("progress-wrapper")).toBeInTheDocument();
  });
});
