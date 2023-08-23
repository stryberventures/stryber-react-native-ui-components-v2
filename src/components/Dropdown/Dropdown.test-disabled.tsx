import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Dropdown from './index';
import {Text} from 'react-native';

it('renders and displays placeholder', () => {
  const placeholder = 'Dropdown placeholder';
  const {getByText} = render(<Dropdown placeholder={placeholder} />);
  getByText(placeholder);
});

it('displays value', () => {
  const value = 'Dropdown value';
  const {getByText} = render(<Dropdown value={value} />);
  getByText(value);
});

it('displays hint', () => {
  const hint = 'Dropdown hint';
  const {getByText} = render(<Dropdown hint={hint} />);
  getByText(hint);
});

it('displays error', () => {
  const error = 'Dropdown error';
  const {getByText} = render(<Dropdown hint={error} />);
  getByText(error);
});

it('displays content', () => {
  const content = 'Text content inside dropdown';
  const testId = 'dropdown-id';
  const {getByTestId, getByText} = render(
    <Dropdown testID={testId}>
      <Text>{content}</Text>
    </Dropdown>,
  );
  fireEvent.press(getByTestId(testId));
  getByText(content);
});

it('fires onPress', () => {
  const testId = 'dropdown-id';
  const onPress = jest.fn();
  const {getByTestId} = render(<Dropdown testID={testId} onPress={onPress} />);
  fireEvent.press(getByTestId(testId));
  expect(onPress).toHaveBeenCalled();
});
