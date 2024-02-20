import { render, screen } from '@testing-library/react';
import Accounts from './Accounts';
import { MemoryRouter } from 'react-router-dom';
// import Accounts from './Accounts'

// test('renders account balance card', () => {
//     render(<Accounts/>)
//     const element = screen.getByTestId('balance-card');
//     expect(element).toBeInTheDocument();
//   });
  

test('renders account balance card', () => {
    render(<MemoryRouter><Accounts/></MemoryRouter>)
    const element = screen.getByText(/checking balance/i);
    expect(element).toBeInTheDocument();
  });

  test('renders account balance card', () => {
    render(<MemoryRouter><Accounts/></MemoryRouter>)
    const element = screen.getByText(/savings balance/i);
    expect(element).toBeInTheDocument();
  });
  
  test('renders account balance card', () => {
    render(<MemoryRouter><Accounts/></MemoryRouter>)
    const element = screen.getByRole('balance-card');
    expect(element).toBeInTheDocument();
  });
  