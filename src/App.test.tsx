import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders name', () => {
  render(<App />);
  const linkElement = screen.getByText('/Maya Goldberg/i');
  expect(linkElement).toBeInTheDocument();
});
