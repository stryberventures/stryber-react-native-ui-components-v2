import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import NumberInput from '.';

it('renders with label and placeholder', () => {
  const label = 'Number';
  const placeholder = 'NumberInput';
  const {getByText, getByPlaceholderText} = render(
    <NumberInput
      variant="labelOutside"
      label={label}
      placeholder={placeholder}
    />,
  );

  getByText(label);
  getByPlaceholderText(placeholder);
});

it('shows invalid input message', () => {
  const error = 'Invalid input';
  const {getByText} = render(<NumberInput error={error} />);
  getByText(error);
});

it('shows hint input message', () => {
  const hint = 'Hint message';
  const {getByText} = render(<NumberInput hint={hint} />);
  getByText(hint);
});

it('shows NumberInput value', () => {
  const value = 6;
  const {getByDisplayValue} = render(<NumberInput value={value} />);
  getByDisplayValue(String(value));
});

it('increase value on plus button', () => {
  const value = 6;
  const {getByDisplayValue, getByTestId} = render(
    <NumberInput value={value} />,
  );
  fireEvent.press(getByTestId('test_number_input_plus'));
  getByDisplayValue(String(value + 1));
});

it('increase value on minus button', () => {
  const value = 6;
  const {getByDisplayValue, getByTestId} = render(
    <NumberInput value={value} />,
  );
  fireEvent.press(getByTestId('test_number_input_minus'));
  getByDisplayValue(String(value - 1));
});
