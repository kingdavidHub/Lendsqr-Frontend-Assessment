import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import TableActions from '../components/TableActions/TableActions';

// Mock dependencies
jest.mock('lucide-react', () => ({
  Eye: () => <div data-testid="eye-icon" />,
  UserRoundCheck: () => <div data-testid="user-round-check-icon" />,
  UserX: () => <div data-testid="user-x-icon" />,
}));

describe('TableActions Component', () => {
  it('renders all action links correctly', () => {
    render(
      <MemoryRouter>
        {/* Pass in a sample userId */}
        <TableActions userId="123" />
      </MemoryRouter>
    );

    // Check link texts
    expect(screen.getByText('View Details')).toBeInTheDocument();
    expect(screen.getByText('Blacklist User')).toBeInTheDocument();
    expect(screen.getByText('Activate User')).toBeInTheDocument();

    // Check the href for "View Details"
    const viewDetailsLink = screen.getByText('View Details').closest('a');
    expect(viewDetailsLink).toHaveAttribute('href', '/user/123/details');
  });
});
