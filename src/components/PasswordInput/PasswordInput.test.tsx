import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import PasswordInput from '.';

it('renders with placeholder', () => {
  const label = 'Email';
  const placeholder = 'Type your email';
  const {getByText, getByPlaceholderText} = render(
    <PasswordInput
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
  const {getByText} = render(<PasswordInput error={error} />);
  getByText(error);
});

it('shows hint input message', () => {
  const hint = 'Hint message';
  const {getByText} = render(<PasswordInput hint={hint} />);
  getByText(hint);
});

it('shows input value', () => {
  const value = 'Test value';
  const {getByDisplayValue} = render(<PasswordInput value={value} />);
  getByDisplayValue(value);
});

it('secured by default', () => {
  const testId = 'password-input';
  const {getByTestId} = render(<PasswordInput testID={testId} />);

  expect(getByTestId(testId).props.secureTextEntry).toBeTruthy();
});

it('unsecured by eye press', () => {
  const testId = 'password-input';
  const {getByTestId} = render(<PasswordInput testID={testId} />);

  fireEvent.press(getByTestId('eye-test'));
  expect(getByTestId(testId).props.secureTextEntry).toBeFalsy();
});
