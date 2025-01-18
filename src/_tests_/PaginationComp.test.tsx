import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import PaginationComp from "../components/PaginationComp/PaginationComp";
import { PaginationProps, UserRecord } from "../types";

// Mock the icons
jest.mock("lucide-react", () => ({
  ChevronDown: () => <div data-testid="chevron-down" />,
  ChevronLeft: () => <div data-testid="chevron-left" aria-label="previous" />,
  ChevronRight: () => <div data-testid="chevron-right" aria-label="next" />,
}));

// Mock the Skeleton component
jest.mock("react-loading-skeleton", () => ({
  __esModule: true,
  default: () => <div role="progressbar" />,
}));

describe("PaginationComp", () => {
  // Use the updated mockRanges
  const mockRanges = Array(4)
    .fill(null)
    .map((_, i) => [
      {
        id: String(i + 1),
        username: `user${i + 1}`,
        email: `user${i + 1}@example.com`,
        date_joined: `2024-01-0${i + 1}`,
        organization: "lendsqr" as "lendsqr" | "irorun" | "lendstar",
        phone_number: `123456789${i}`,
        status: i % 2 === 0 ? "active" : "inactive",
        first_name: `First${i + 1}`,
        last_name: `Last${i + 1}`,
        level_education: `Level ${i + 1}`,
        guarantor: `Guarantor ${i + 1}`,
        guarantor_number: `987654321${i}`,
        guarantor_relationship: `Relationship ${i + 1}`,
        guarantor_email: `guarantor${i + 1}@example.com`,
        children: i + 1,
        gender: i % 2 === 0 ? "male" : "female",
        marital_status: `Marital Status ${i + 1}`,
      },
    ]);

  const defaultProps: PaginationProps = {
    setCurrentRange: jest.fn(),
    setCurrentPage: jest.fn(),
    ranges: mockRanges as UserRecord[][],
    currentPage: 1,
    totalPages: 4,
    loading: false,
    isFilterActive: false,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly with loaded state", () => {
    render(<PaginationComp {...defaultProps} />);

    expect(screen.getByTestId("pagination-container")).toBeInTheDocument();
    expect(screen.getByText("Showing")).toBeInTheDocument();
    expect(screen.getByTestId("rangeSelect")).toBeInTheDocument();
    expect(screen.getByLabelText("previous")).toBeInTheDocument();
    expect(screen.getByLabelText("next")).toBeInTheDocument();
  });

  it("renders loading state correctly", () => {
    render(<PaginationComp {...defaultProps} loading={true} />);

    expect(screen.getAllByRole("progressbar")).toHaveLength(7); // Total number of skeletons
    expect(screen.queryByTestId("rangeSelect")).not.toBeInTheDocument();
  });

  it("handles range selection", async () => {
    render(<PaginationComp {...defaultProps} />);

    const select = screen.getByTestId("rangeSelect");
    fireEvent.change(select, { target: { value: "1" } });

    await waitFor(() => {
      expect(defaultProps.setCurrentRange).toHaveBeenCalledWith(mockRanges[1]);
      expect(defaultProps.setCurrentPage).toHaveBeenCalledWith(1);
    });
  });

  it("handles page navigation", async () => {
    render(<PaginationComp {...defaultProps} />);

    fireEvent.click(screen.getByLabelText("next"));

    await waitFor(() => {
      expect(defaultProps.setCurrentPage).toHaveBeenCalled();
    });
  });

  it("hides pagination when filter is active", () => {
    render(<PaginationComp {...defaultProps} isFilterActive={true} />);

    expect(screen.queryByTestId("rangeSelect")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("previous")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("next")).not.toBeInTheDocument();
  });
});
