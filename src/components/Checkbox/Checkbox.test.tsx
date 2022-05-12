import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import Checkbox from '.';

it('renders', () => {
  render(<Checkbox />);
});

it('displays label', () => {
  const label = 'Radio button';
  const {getByText} = render(<Checkbox label={label} />);

  getByText(label);
});

it('displays error', () => {
  const error = 'Radio error';
  const {getByText} = render(<Checkbox error={error} />);

  getByText(error);
});

it('displays hint', () => {
  const hint = 'Radio hint';
  const {getByText} = render(<Checkbox hint={hint} />);

  getByText(hint);
});

it('fires onChange', () => {
  const onChange = jest.fn();
  const testId = 'radio';
  const {getByTestId} = render(
    <Checkbox testID={testId} onChange={onChange} />,
  );
  const radioButton = getByTestId(testId);
  fireEvent.press(radioButton);
  expect(onChange).toHaveBeenCalled();
});
