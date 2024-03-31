import { render, screen } from "@testing-library/react";
import ProgressBar from "./ProgressBar";

describe("ProgressBar component", () => {
  it("renders CircularProgress with the provided testId", () => {
    const testId = "progress-bar";

    // Render the ProgressBar component with the specified testId
    render(<ProgressBar testId={testId} />);

    const circularProgress = screen.getByTestId(testId);
    expect(circularProgress).toBeInTheDocument();
  });
});
