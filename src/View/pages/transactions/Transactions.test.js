import { render, screen } from '@testing-library/react';
import Transactions from './Transactions';
import { MemoryRouter } from 'react-router-dom';
  

  test('renders search input', () => {
    render(<MemoryRouter><Transactions/></MemoryRouter>)
    const element = screen.getByRole('search-input');
    expect(element).toBeInTheDocument();
  });