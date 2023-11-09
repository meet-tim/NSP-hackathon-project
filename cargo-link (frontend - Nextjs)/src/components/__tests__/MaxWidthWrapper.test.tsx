import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MaxWidthWrapper } from "../MaxWidthWrapper";

describe("TestComponent", () => {
  it("should render the test component", () => {
    render(
      <MaxWidthWrapper>
        <p data-testid="p">Displaying a content inside the wrapper</p>
      </MaxWidthWrapper>
    );
    const maxWidthWrapper = screen.getByTestId("max-width-wrapper");
    const p = screen.getByTestId("p");

    expect(maxWidthWrapper).toBeInTheDocument();
    expect(p.textContent).toBe("Displaying a content inside the wrapper");
  });
});

