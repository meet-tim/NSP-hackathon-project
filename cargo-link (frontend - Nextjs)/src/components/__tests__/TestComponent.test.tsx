import { render, screen } from "@testing-library/react";
// Extend the expect to make it work for react testing library
import "@testing-library/jest-dom";
import { TestComponent } from "../TestComponent";

describe("TestComponent", () => {
  it("should render the test component", () => {
    render(<TestComponent />);
    const p = screen.getByTestId("p")

    expect(p).toBeInTheDocument();
  });
});
