import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import Layout from '../App';
import Sidebar from '../components/Sidebar/Sidebar';
import Dashboard from '../pages/Dashboard/Dashboard';
import Login from '../pages/Login/Login';
import UserDetails from '../pages/UserDetails/UserDetails';
import Error from '../pages/Error/Error';

describe('App Component', () => {
  const renderWithRouter = (initialEntries: string[]) => {
    return render(
      <MemoryRouter initialEntries={initialEntries}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <Layout>
                <Sidebar />
                <Dashboard />
              </Layout>
            }
          />
          <Route
            path="/user/:id/details"
            element={
              <Layout>
                <Sidebar />
                <UserDetails />
              </Layout>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </MemoryRouter>
    );
  };

  test('renders login page on root path', () => {
    renderWithRouter(['/']);
    expect(screen.getByTestId('login-page')).toBeInTheDocument();
  });

  test('renders dashboard with navbar and sidebar', async () => {
    renderWithRouter(['/dashboard']);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('dashboard-page')).toBeInTheDocument();
  });

  test('renders user details page with correct layout', async () => {
    renderWithRouter(['/user/123/details']);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('user-details')).toBeInTheDocument();
  });

  test('renders error page on invalid route', () => {
    renderWithRouter(['/invalid-route']);
    expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
  });
});