import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import { ToggleContext } from "../context/ToggleContext";
import { useResize } from '../hooks/useResize';

// Mock the useResize hook
jest.mock("../hooks/useResize", () => ({
  useResize: jest.fn(() => [{ width: 1024, height: 768 }])
}));

// Mock dependencies
jest.mock("../assets/lendsqr.svg", () => "lendsqr-logo");
jest.mock("lucide-react", () => ({
  Bell: () => <div data-testid="bell-icon" />,
  Search: () => <div data-testid="search-icon" />,
  Menu: () => <div data-testid="menu-icon" />,
  ChevronDown: () => <div data-testid="chevron-down" />,
}));

describe("Navbar Component", () => {
  const mockSetToggle = jest.fn();

  const renderNavbar = (toggleValue = false) => {
    return render(
      <ToggleContext.Provider
        value={{ toggle: toggleValue, setToggle: mockSetToggle }}
      >
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </ToggleContext.Provider>
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
    // Reset the mock implementation of useResize
    (useResize as jest.Mock).mockImplementation(() => [{ width: 1024, height: 768 }]);
  });

  it("renders main navbar elements", () => {
    renderNavbar();
    expect(screen.getByAltText("Lendsqr Logo")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search for anything")).toBeInTheDocument();
    expect(screen.getByLabelText("Search button")).toBeInTheDocument();
    expect(screen.getByLabelText("Docs")).toBeInTheDocument();
    expect(screen.getByLabelText("Notifications")).toBeInTheDocument();
    expect(screen.getByAltText("Profile")).toBeInTheDocument();
  });

  it("handles search functionality", () => {
    renderNavbar();
    const searchInput = screen.getByPlaceholderText("Search for anything");
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput).toHaveValue("test");
  });

  it("renders navigation elements", () => {
    renderNavbar();
    expect(screen.getByLabelText("Docs")).toBeInTheDocument();
    expect(screen.getByLabelText("Notifications")).toBeInTheDocument();
  });

  it("renders navbar with search in desktop view", () => {
    renderNavbar();
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByRole("search")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search for anything")).toBeInTheDocument();
  });
});

