import { render, screen } from '@testing-library/react';
import Footer from './index';
import React from 'react';
// test page render container display text
test('<Footer />', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Made with heart in Mebourne./i);
  expect(linkElement).toBeInTheDocument();
});