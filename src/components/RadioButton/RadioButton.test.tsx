import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import RadioButton from '.';

it('renders', () => {
  render(<RadioButton value="option" />);
});

it('displays placeholder', () => {
  const placeholder = 'Radio button';
  const {getByText} = render(
    <RadioButton value="option" placeholder={placeholder} />,
  );

  getByText(placeholder);
});

it('displays error', () => {
  const error = 'Radio error';
  const {getByText} = render(<RadioButton value="option" error={error} />);

  getByText(error);
});

it('displays hint', () => {
  const hint = 'Radio hint';
  const {getByText} = render(<RadioButton value="option" hint={hint} />);

  getByText(hint);
});

it('fires onChange', () => {
  const onChange = jest.fn();
  const testId = 'radio';
  const {getByTestId} = render(
    <RadioButton testID={testId} value="option" onChange={onChange} />,
  );
  const radioButton = getByTestId(testId);
  fireEvent.press(radioButton);
  expect(onChange).toHaveBeenCalled();
});
