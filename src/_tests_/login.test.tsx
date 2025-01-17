import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import LoginPage from '../pages/Login/Login';

// Mock useNavigate
const mockedUsedNavigate = jest.fn();
jest.mock('react-router', () => ({
   ...jest.requireActual('react-router'),
   useNavigate: () => mockedUsedNavigate,
}));

describe('LoginPage', () => {
  const renderLoginPage = () => {
    return render(
      <HelmetProvider>
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      </HelmetProvider>
    );
  };

  beforeEach(() => {
    // Clear mocks before each test
    jest.clearAllMocks();
  });

  it('renders all login page elements correctly', () => {
    renderLoginPage();

    // Check for main elements
    expect(screen.getByAltText('Lendsqr Logo')).toBeInTheDocument();
    expect(screen.getByAltText('Login Illustration')).toBeInTheDocument();
    expect(screen.getByText('Welcome!')).toBeInTheDocument();
    expect(screen.getByText('Enter details to login.')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument();
  });

  it('handles password visibility toggle', () => {
    renderLoginPage();
    
    const passwordInput = screen.getByPlaceholderText('Password');
    const toggleButton = screen.getByText('SHOW');

    expect(passwordInput).toHaveAttribute('type', 'password');
    
    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute('type', 'text');
    
    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  it('shows validation errors for empty form submission', async () => {
    renderLoginPage();
    
    const submitButton = screen.getByRole('button', { name: /log in/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Email is required')).toBeInTheDocument();
      expect(screen.getByText('This field is required')).toBeInTheDocument();
    });
  });

  it('navigates to dashboard on successful form submission', async () => {
    renderLoginPage();
    
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByRole('button', { name: /log in/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockedUsedNavigate).toHaveBeenCalledWith('/dashboard');
    });
  });

  it('maintains forgot password link functionality', () => {
    renderLoginPage();
    
    const forgotPasswordLink = screen.getByText('FORGOT PASSWORD?');
    expect(forgotPasswordLink).toHaveAttribute('href', '/');
  });
});
