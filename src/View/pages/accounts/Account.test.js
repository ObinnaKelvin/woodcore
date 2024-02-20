import { render, screen } from '@testing-library/react';
import Accounts from './Accounts';
import { MemoryRouter } from 'react-router-dom';
  

test('renders checking account balance card', () => {
    render(<MemoryRouter><Accounts/></MemoryRouter>)
    const element = screen.getByText(/checking balance/i);
    expect(element).toBeInTheDocument();
  });

  test('renders savings account balance card', () => {
    render(<MemoryRouter><Accounts/></MemoryRouter>)
    const element = screen.getByText(/savings balance/i);
    expect(element).toBeInTheDocument();
  });
  
  test('renders credit card account balance card', () => {
    render(<MemoryRouter><Accounts/></MemoryRouter>)
    const element = screen.getByRole('balance-card');
    expect(element).toBeInTheDocument();
  });
  