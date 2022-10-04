import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Checkbox from '.';
import {Text} from 'react-native';

it('renders', () => {
  render(<Checkbox />);
});

it('displays label', () => {
  const label = 'Checkbox';
  const {getByText} = render(<Checkbox label={label} />);

  getByText(label);
});

it('displays error', () => {
  const error = 'Checkbox';
  const {getByText} = render(<Checkbox error={error} />);

  getByText(error);
});

it('displays hint', () => {
  const hint = 'Checkbox';
  const {getByText} = render(<Checkbox hint={hint} />);

  getByText(hint);
});

it('displays custom content', () => {
  const {getByText} = render(<Checkbox label={<Text>custom content</Text>} />);

  getByText('custom content');
});

it('fires onChange', () => {
  const onChange = jest.fn();
  const testId = 'checkbox';
  const {getByTestId} = render(
    <Checkbox testID={testId} onChange={onChange} />,
  );
  const radioButton = getByTestId(testId);
  fireEvent.press(radioButton);
  expect(onChange).toHaveBeenCalled();
});
