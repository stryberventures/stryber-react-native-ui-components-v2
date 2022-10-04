import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Switch from '.';
import {Text} from 'react-native';

it('renders', () => {
  render(<Switch />);
});

it('displays label', () => {
  const label = 'Switch';
  const {getByText} = render(<Switch label={label} />);

  getByText(label);
});

it('displays error', () => {
  const error = 'Switch';
  const {getByText} = render(<Switch error={error} />);

  getByText(error);
});

it('displays hint', () => {
  const hint = 'Switch';
  const {getByText} = render(<Switch hint={hint} />);

  getByText(hint);
});

it('displays custom content', () => {
  const {getByText} = render(
    <Switch label={<Text>custom content</Text>} />,
  );

  getByText('custom content');
});

it('fires onChange', () => {
  const onChange = jest.fn();
  const testId = 'switch';
  const {getByTestId} = render(<Switch testID={testId} onChange={onChange} />);
  const radioButton = getByTestId(testId);
  fireEvent.press(radioButton);
  expect(onChange).toHaveBeenCalled();
});
