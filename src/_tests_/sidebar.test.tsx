// Sidebar.test.tsx
import { render, screen } from "@testing-library/react";
import Sidebar from "../components/Sidebar/Sidebar";  // Adjust the path as needed

// Mocking ChevronDown icon from lucide-react
jest.mock("lucide-react", () => ({
  ChevronDown: () => <div data-testid="chevron-down" />,
}));

// Test case for Sidebar component
describe("Sidebar", () => {
  it("renders ChevronDown icon correctly", () => {
    render(<Sidebar />);

    // Check if the mocked ChevronDown icon is rendered
    expect(screen.getByTestId("chevron-down")).toBeInTheDocument();
  });

  it("renders Switch Organization section", () => {
    render(<Sidebar />);

    // Check if the "Switch Organization" section is rendered with the expected text
    expect(screen.getByText("Switch Organization")).toBeInTheDocument();
  });

  it("renders Dashboard section", () => {
    render(<Sidebar />);

    // Check if the Dashboard section is rendered with the expected text
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });

  it("handles ClickAwayListener functionality", () => {
    // Here you can test the ClickAwayListener behavior if needed
    // For example, check that the `setToggle` function is called when clicking away
  });
});
