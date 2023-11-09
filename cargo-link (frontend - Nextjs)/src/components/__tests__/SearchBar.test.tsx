import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SearchBar } from "../SearchBar";

describe("SearchBar", () => {
  it("should render the search bar component", () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText("Search for a destination");
    const button = screen.getByText("Search");

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
