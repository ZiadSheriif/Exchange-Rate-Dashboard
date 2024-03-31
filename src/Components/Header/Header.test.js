import { render, fireEvent } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("renders the title", () => {
    const { getByText } = render(<Header mode="view" toggleMode={() => {}} />);
    expect(getByText("Exchange Rate Dashboard")).toBeInTheDocument();
  });

  it("renders the correct button text for view mode", () => {
    const { getByText } = render(<Header mode="view" toggleMode={() => {}} />);
    expect(getByText("Switch to Edit Mode")).toBeInTheDocument();
  });

  it("renders the correct button text for edit mode", () => {
    const { getByText } = render(<Header mode="edit" toggleMode={() => {}} />);
    expect(getByText("Switch to View Mode")).toBeInTheDocument();
  });

  it("calls the toggleMode function when the button is clicked", () => {
    const toggleMode = jest.fn();
    const { getByText } = render(
      <Header mode="view" toggleMode={toggleMode} />
    );
    fireEvent.click(getByText("Switch to Edit Mode"));
    expect(toggleMode).toHaveBeenCalled();
  });
});
