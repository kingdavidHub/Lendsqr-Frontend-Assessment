import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import { ToggleContext } from "../context/ToggleContext";
import { act } from "react-dom/test-utils";



const triggerResize = (width: number) => {
  window.innerWidth = width;
  window.dispatchEvent(new Event('resize'));
};

// Mock dependencies
jest.mock("../assets/lendsqr.svg", () => "lendsqr-logo");
jest.mock("lucide-react", () => ({
  Bell: () => <div data-testid="bell-icon" />,
  Search: () => <div data-testid="search-icon" />,
  Menu: () => <div data-testid="menu-icon" />,
  ChevronDown: () => <div data-testid="chevron-down" />,
}));

// Mock window resize
global.window.resizeTo = function (width, height) {
  beforeAll(() => {
    // Mock window resize methods
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1024,
    });

    Object.defineProperty(window, "innerHeight", {
      writable: true,
      configurable: true,
      value: 768,
    });
  });

  beforeEach(() => {
    jest.clearAllMocks();
    // Reset to desktop size
    triggerResize(1024);
  });

  afterEach(() => {
    // Clean up
    jest.clearAllMocks();
  });
  Object.assign(this, {
    innerWidth: width,
    innerHeight: height,
  });
  global.window.dispatchEvent(new Event("resize"));
};

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
    // Set default window size
    window.innerWidth = 1024;
    window.innerHeight = 768;
  });
  it("renders main navbar elements", () => {
    renderNavbar();
    expect(screen.getByAltText("Lendsqr Logo")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Search for anything")
    ).toBeInTheDocument();
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

  it('hides search box on mobile view', async () => {
    renderNavbar();
    
    // Desktop view - search box should be visible
    const searchContainer = screen.getByRole('search');
    expect(searchContainer).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search for anything')).toBeInTheDocument();
    expect(screen.getByLabelText('Search button')).toBeInTheDocument();
    
    // Resize to mobile view
    triggerResize(768);
    
    // Mobile view - search box should be hidden
    await expect(screen.queryByRole('search')).not.toBeInTheDocument();
    await expect(screen.queryByPlaceholderText('Search for anything')).not.toBeInTheDocument();
    await expect(screen.queryByLabelText('Search button')).not.toBeInTheDocument();
  });
});
