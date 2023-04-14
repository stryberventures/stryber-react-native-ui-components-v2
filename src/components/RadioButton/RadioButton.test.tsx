import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import RadioButton from '.';

jest.mock('react-native-shadow-2', () => {
  return {
    Shadow: () => 'View',
  };
});

it('renders', () => {
  render(<RadioButton value="option" />);
});

it('displays label', () => {
  const label = 'Radio button';
  const {getByText} = render(<RadioButton value="option" label={label} />);

  getByText(label);
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
