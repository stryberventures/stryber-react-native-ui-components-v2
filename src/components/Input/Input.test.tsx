import React from 'react';
import {render} from '@testing-library/react-native';

import Input from '.';

it('renders default elements', () => {
  const label = 'Email';
  const placeholder = 'Type your email';
  const {getByText, getByPlaceholderText} = render(
    <Input label={label} placeholder={placeholder} />,
  );

  getByText(label);
  getByPlaceholderText(placeholder);
});

it('shows invalid input message', () => {
  const error = 'Invalid input';
  const {getByText} = render(<Input error={error} />);
  getByText(error);
});

it('shows hint input message', () => {
  const hint = 'Hint message';
  const {getByText} = render(<Input hint={hint} />);
  getByText(hint);
});

it('shows input value', () => {
  const value = 'Test value';
  const {getByDisplayValue} = render(<Input value={value} />);
  getByDisplayValue(value);
});
