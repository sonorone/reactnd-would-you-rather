import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

test('renders Submit button', () => {
  const { getByText } = render(<Button text='Submit' />);
  const buttonElement = getByText(/Submit/i);
  expect(buttonElement).toBeInTheDocument();
});
