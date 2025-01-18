import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FilterForm from '../components/FilterForm/FilterForm';
import { UserRecord } from '../types';
import { formatDate } from '../utils';

// Mock external dependencies
jest.mock('lucide-react', () => ({
  CalendarDays: () => <div data-testid="calendar-icon" />
}));

jest.mock('../components/FilterForm/FilterForm.module.scss', () => ({
  filterWrapper: 'filterWrapper',
  filterContainer: 'filterContainer',
  filterForm: 'filterForm',
  formGroup: 'formGroup',
  selectWrapper: 'selectWrapper',
  dateWrapper: 'dateWrapper',
  calendarIcon: 'calendarIcon',
  buttonGroup: 'buttonGroup',
  resetButton: 'resetButton',
  filterButton: 'filterButton',
  formError: 'formError',
  active: 'active'
}));

describe('FilterForm Component', () => {
  let mockSetData: jest.Mock;
  let mockSetRanges: jest.Mock;
  let mockSetCurrentRange: jest.Mock;

  const mockData: UserRecord[] = [
    {
      id: '1',
      username: 'User 1',
      email: 'user1@example.com',
      organization: 'lendsqr',
      phone_number: '1234567890',
      date_joined: 'August 10, 2023, 12:00 AM',
      status: 'active',
      first_name: 'John',
      last_name: 'Doe',
      level_education: 'Bachelor',
      guarantor: 'Jane Smith',
      guarantor_number: '0987654321',
      guarantor_relationship: 'Sister',
      guarantor_email: 'jane@example.com',
      children: 2,
      gender: 'male',
      marital_status: 'married'
    },
    {
      id: '2',
      username: 'User 2',
      email: 'user2@example.com',
      organization: 'irorun',
      phone_number: '0987654321',
      date_joined: 'September 1, 2023, 12:00 AM',
      status: 'pending',
      first_name: 'Jane',
      last_name: 'Smith',
      level_education: 'Master',
      guarantor: 'John Doe',
      guarantor_number: '1234567890',
      guarantor_relationship: 'Brother',
      guarantor_email: 'john@example.com',
      children: 0,
      gender: 'female',
      marital_status: 'single'
    }
  ];

  beforeEach(() => {
    mockSetData = jest.fn();
    mockSetRanges = jest.fn();
    mockSetCurrentRange = jest.fn();
    jest.clearAllMocks();
  });

  const renderFilterForm = () => {
    return render(
      <FilterForm
        data={mockData}
        setData={mockSetData}
        setRanges={mockSetRanges}
        setCurrentRange={mockSetCurrentRange}
      />
    );
  };

  describe('Form Rendering', () => {
    beforeEach(() => {
      renderFilterForm();
    });

    it('renders all form fields correctly', () => {
      const fields = ['organization', 'username', 'email', 'date', 'phone number', 'status'];
      fields.forEach((label) => {
        expect(screen.getByLabelText(new RegExp(label, 'i'))).toBeInTheDocument();
      });
    });

    it('renders organization options correctly', () => {
      const organizationSelect = screen.getByLabelText(/organization/i);
      expect(organizationSelect).toHaveValue('');
      expect(screen.getByRole('option', { name: 'Lendsqr' })).toBeInTheDocument();
      expect(screen.getByRole('option', { name: 'Irorun' })).toBeInTheDocument();
      expect(screen.getByRole('option', { name: 'Lendstar' })).toBeInTheDocument();
    });

    it('renders status options correctly', () => {
      const statusSelect = screen.getByLabelText(/status/i);
      expect(statusSelect).toHaveValue('');
      ['Active', 'Inactive', 'Pending', 'Blacklisted'].forEach((status) => {
        expect(screen.getByRole('option', { name: status })).toBeInTheDocument();
      });
    });
  });

  describe('Form Interactions', () => {
    beforeEach(() => {
      renderFilterForm();
    });

    it('shows validation error when submitting without required organization', async () => {
      fireEvent.submit(screen.getByRole('button', { name: /filter/i }).closest('form')!);

      await waitFor(() => {
        expect(screen.getByText(/organization has not been set/i)).toBeInTheDocument();
      });
    });

    it('resets form fields when reset button is clicked', async () => {
      const usernameInput = screen.getByLabelText(/username/i);
      fireEvent.change(usernameInput, { target: { value: 'Test User' } });

      fireEvent.click(screen.getByRole('button', { name: /reset/i }));

      await waitFor(() => {
        expect(usernameInput).toHaveValue('');
      });
    });
  });

  

  // describe('Filtering Functionality', () => {
  //   beforeEach(() => {
  //     renderFilterForm();
  //   });
  
  //   it('filters by username correctly', async () => {
  //     // Set required fields
  //     fireEvent.change(screen.getByLabelText(/organization/i), {
  //       target: { value: 'lendsqr' }, // Match the organization in mockData for username test
  //     });
  //     fireEvent.change(screen.getByLabelText(/username/i), {
  //       target: { value: 'User 1' }, // Match the username in mockData[0]
  //     });
  
  //     fireEvent.click(screen.getByRole('button', { name: /filter/i }));
  
  //     await waitFor(() => {
  //       expect(mockSetData).toHaveBeenCalledWith([mockData[0]]);
  //     });
  //     expect(mockSetRanges).toHaveBeenCalledWith([[mockData[0]]]);
  //     expect(mockSetCurrentRange).toHaveBeenCalledWith(mockData[0]);
  //   });
  
  //   it('filters by email correctly', async () => {
  //     // Set required fields
  //     fireEvent.change(screen.getByLabelText(/organization/i), {
  //       target: { value: 'irorun' }, // Match the organization in mockData for email test
  //     });
  //     fireEvent.change(screen.getByLabelText(/email/i), {
  //       target: { value: 'user2@example.com' }, // Match the email in mockData[1]
  //     });
  
  //     fireEvent.click(screen.getByRole('button', { name: /filter/i }));
  
  //     await waitFor(() => {
  //       expect(mockSetData).toHaveBeenCalledWith([mockData[1]]);
  //     });
  //     expect(mockSetRanges).toHaveBeenCalledWith([[mockData[1]]]);
  //     expect(mockSetCurrentRange).toHaveBeenCalledWith(mockData[1]);
  //   });
  
  //   it('handles no matching data correctly', async () => {
  //     // Set required fields with no matching data
  //     fireEvent.change(screen.getByLabelText(/organization/i), {
  //       target: { value: 'nonexistent' },
  //     });
  //     fireEvent.change(screen.getByLabelText(/username/i), {
  //       target: { value: 'Nonexistent User' },
  //     });
  
  //     fireEvent.click(screen.getByRole('button', { name: /filter/i }));
  
  //     await waitFor(() => {
  //       expect(mockSetData).toHaveBeenCalledWith([]);
  //     });
  //     expect(mockSetRanges).toHaveBeenCalledWith([]);
  //     expect(mockSetCurrentRange).toHaveBeenCalledWith(null);
  //   });
  // });
  
});
