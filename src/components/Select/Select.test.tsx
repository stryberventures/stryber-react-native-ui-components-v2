import React from 'react';
import Select from '.';
import {fireEvent, render} from '@testing-library/react-native';

const options = [
  {label: 'One', value: 'one'},
  {label: 'Two', value: 'two'},
  {label: 'Three for length testing', value: 'three'},
  {label: 'Four', value: 4},
  {label: 'Five', value: 'five'},
  {label: 'Six', value: 6},
];

it('renders with placeholder', () => {
  const label = 'Select';
  const placeholder = 'Choose an option';
  const {getByText} = render(
    <Select options={options} label={label} placeholder={placeholder} />,
  );

  getByText(label);
  getByText(placeholder);
});

it('shows error message', () => {
  const error = 'Invalid selection';
  const {getByText} = render(<Select options={options} error={error} />);
  getByText(error);
});

it('shows hint message', () => {
  const hint = 'Hint message';
  const {getByText} = render(<Select options={options} hint={hint} />);
  getByText(hint);
});

it('shows multiselect value', () => {
  const value = 'one';
  const {getByText} = render(
    <Select options={options} selectedOption={value} />,
  );
  getByText('One');
});

it('fires onChange function', () => {
  const testId = 'select-test';
  const onChange = jest.fn();
  const {getByTestId, getByText} = render(
    <Select testID={testId} onChange={onChange} options={options} />,
  );
  fireEvent.press(getByTestId(testId));
  fireEvent.press(getByText('One'));
  expect(onChange).toHaveBeenCalled();
});

it('fires onDropdownChange function', () => {
  const testId = 'select-test';
  const onDropdownChange = jest.fn();
  const {getByTestId} = render(
    <Select
      testID={testId}
      onDropdownChange={onDropdownChange}
      options={options}
    />,
  );
  fireEvent.press(getByTestId(testId));
  expect(onDropdownChange).toHaveBeenCalled();
});
