import { render, screen, fireEvent } from "@testing-library/react";
import PaginatedData from "../components/PaginatedData/PaginatedData";
import { UserRecord } from "../types";
import ClickAwayListener from "react-click-away-listener";

jest.mock("lucide-react", () => ({
  MoreVertical: () => <div data-testid="more-icon" />,
}));

jest.mock("../components/TableActions/TableActions", () => ({
  __esModule: true,
  default: ({ userId, onClickAway }: { userId: string | null; onClickAway: () => void }) => (
    <ClickAwayListener onClickAway={() => onClickAway()}>
      <div data-testid="table-actions">Actions for {userId}</div>
    </ClickAwayListener>
  ),
}));
describe("PaginatedData Component", () => {
  const mockUser: UserRecord = {
    id: "1",
    username: "User 1",
    email: "user1@example.com",
    organization: "lendsqr",
    phone_number: "1234567890",
    date_joined: "August 10, 2023, 12:00 AM",
    status: "active",
    first_name: "John",
    last_name: "Doe",
    level_education: "Bachelor",
    guarantor: "Jane Smith",
    guarantor_number: "0987654321",
    guarantor_relationship: "Sister",
    guarantor_email: "jane@example.com",
    children: 2,
    gender: "male",
    marital_status: "married",
  };

  let mockSetActiveUserId: jest.Mock;

  beforeEach(() => {
    mockSetActiveUserId = jest.fn();
  });

  const renderPaginatedData = (activeUserId: string | null) => {
    return render(
      <table>
        <tbody>
          <PaginatedData
            user={mockUser}
            activeUserId={activeUserId}
            setActiveUserId={mockSetActiveUserId}
          />
        </tbody>
      </table>
    );
  };

  it("renders user data correctly", () => {
    renderPaginatedData(null);

    expect(screen.getByText(mockUser.organization)).toBeInTheDocument();
    expect(screen.getByText(mockUser.username)).toBeInTheDocument();
    expect(
      screen.getByText(`${mockUser.username}@${mockUser.organization}.com`)
    ).toBeInTheDocument();
    expect(screen.getByText(mockUser.phone_number)).toBeInTheDocument();
    expect(screen.getByText(mockUser.date_joined)).toBeInTheDocument();
    expect(screen.getByText(mockUser.status)).toBeInTheDocument();
  });

  it("calls setActiveUserId when more button is clicked", () => {
    renderPaginatedData(null);

    const moreButton = screen.getByRole("button", { name: /more actions/i });
    fireEvent.click(moreButton);

    expect(mockSetActiveUserId).toHaveBeenCalledWith(mockUser.id);
  });

  it("renders TableActions component when activeUserId matches user id", () => {
    renderPaginatedData(mockUser.id);

    expect(screen.getAllByTestId("table-actions")[0]).toBeInTheDocument();
    expect(screen.getByText(`Actions for ${mockUser.id}`)).toBeInTheDocument();
  });

  // it("hides TableActions component when clicking away", () => {
  //   renderPaginatedData(mockUser.id);
  
  //   // Simulate a click outside the component
  //   fireEvent.mouseDown(document.body);
  
  //   // Verify that setActiveUserId was called with null
  //   expect(mockSetActiveUserId).toHaveBeenCalledWith(null);
  // });

  it("applies correct styles based on user status", () => {
    renderPaginatedData(null);

    const statusElement = screen.getByText(mockUser.status);
    expect(statusElement).toHaveClass("active");
  });
});
