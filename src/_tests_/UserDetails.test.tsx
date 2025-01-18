import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import UserDetails from "../pages/UserDetails/UserDetails";

// Mock the imports from lucide-react
jest.mock("lucide-react", () => ({
  ArrowLeft: jest.fn(() => <div data-testid="arrow-left" />),
  UserRound: jest.fn(() => <div data-testid="user-round" />),
}));

// Mock the useUserDetailsStorage hook (if needed)
jest.mock("../hooks/useUserDetailsStorage", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    first_name: "John",
    last_name: "Doe",
    phone_number: "1234567890",
    email: "john.doe@example.com",
    gender: "Male",
    marital_status: "Single",
    children: "No",
    guarantor: "Jane Doe",
    guarantor_number: "0987654321",
    guarantor_email: "jane.doe@example.com",
    guarantor_relationship: "Sister",
    level_education: "Bachelor's Degree",
  })),
}));

describe("UserDetails", () => {
  it("renders the back link correctly", () => {
    render(
      <Router>
        <HelmetProvider>
          <UserDetails />
        </HelmetProvider>
      </Router>
    );

    // Check if the back link is rendered correctly
    const backLink = screen.getByTestId("arrow-left");
    expect(backLink).toBeInTheDocument();
    expect(screen.getByText("Back to Users")).toBeInTheDocument();
  });

  it("renders the user profile icon correctly", () => {
    render(
      <Router>
        <HelmetProvider>
          <UserDetails />
        </HelmetProvider>
      </Router>
    );

    // Check if the UserRound component is rendered
    const profileIcon = screen.getByTestId("user-round");
    expect(profileIcon).toBeInTheDocument();
  });

  it("renders user details", () => {
    render(
      <Router>
        <HelmetProvider>
          <UserDetails />
        </HelmetProvider>
      </Router>
    );

    const fullNameElements = screen.getAllByText("John Doe");
    expect(fullNameElements).toHaveLength(2);
    expect(fullNameElements[0]).toBeInTheDocument(); // h2 tag
    expect(fullNameElements[1]).toBeInTheDocument(); // p tag

    // Check if the user's full name is rendered
    expect(screen.getByText("1234567890")).toBeInTheDocument();
    expect(screen.getByText("john.doe@example.com")).toBeInTheDocument();
    expect(screen.getByText("Male")).toBeInTheDocument();
    expect(screen.getByText("Single")).toBeInTheDocument();
    expect(screen.getByText("No")).toBeInTheDocument();
  });
});
