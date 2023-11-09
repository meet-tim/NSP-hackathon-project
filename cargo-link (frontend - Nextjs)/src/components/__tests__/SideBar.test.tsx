import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Sidebar } from "../Sidebar";

describe("Sidebar", () => {
  it("should render the sidebar component", () => {
    render(<Sidebar url="dashboard" />);
    const dashboardLink = screen.getByText("Dashboard");
    const bookingLink = screen.getByText("Booking");
    const tripsLink = screen.getByText("Trips");
    const userName = screen.getByText("Emily Johnson");
    const signOutButton = screen.getByText("Sign Out");

    expect(dashboardLink).toBeInTheDocument();
    expect(bookingLink).toBeInTheDocument();
    expect(tripsLink).toBeInTheDocument();
    expect(userName).toBeInTheDocument();
    expect(signOutButton).toBeInTheDocument();
  });
});
