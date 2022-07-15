import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import Combobox from '.';
import {ISelectOption} from '../Select';

const cities: ISelectOption[] = [
  {label: 'New York', value: 'New York'},
  {label: 'Los Angeles', value: 'Los Angeles'},
  {label: 'Chicago', value: 'Chicago'},
  {label: 'Houston', value: 'Houston'},
  {label: 'Philadelphia', value: 'Philadelphia'},
  {label: 'Phoenix', value: 'Phoenix'},
  {label: 'San Antonio', value: 'San Antonio'},
  {label: 'San Diego', value: 'San Diego'},
  {label: 'Dallas', value: 'Dallas'},
];

it('renders with placeholder', () => {
  const label = 'City';
  const placeholder = 'Choose a city';
  const {getByText, getByPlaceholderText} = render(
    <Combobox label={label} placeholder={placeholder} options={cities} />,
  );

  getByText(label);
  getByPlaceholderText(placeholder);
});

it('shows invalid input message', () => {
  const error = 'Invalid input';
  const {getByText} = render(<Combobox error={error} options={cities} />);
  getByText(error);
});

it('shows hint input message', () => {
  const hint = 'Hint message';
  const {getByText} = render(<Combobox hint={hint} options={cities} />);
  getByText(hint);
});

it('shows input value', () => {
  const value = 'Phoenix';
  const {getByDisplayValue} = render(
    <Combobox value={value} options={cities} />,
  );
  getByDisplayValue(value);
});

it('fires onChangeText', () => {
  const testID = 'test-id';
  const onChangeText = jest.fn();
  const {getByDisplayValue, getByTestId} = render(
    <Combobox onChangeText={onChangeText} options={cities} testID={testID} />,
  );
  fireEvent.changeText(getByTestId(testID), 'Dallas');
  getByDisplayValue('Dallas');
  expect(onChangeText).toHaveBeenCalledTimes(1);
});
