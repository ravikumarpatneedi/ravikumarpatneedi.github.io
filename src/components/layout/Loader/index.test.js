import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './index';

describe('Loader', () => {
  test('renders loader text', () => {
    render(<Loader />);
    expect(screen.getByText('Ravi Patneedi')).toBeInTheDocument();
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
  });
});
