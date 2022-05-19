import React from 'react';
import Multiselect from '.';
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
  const label = 'Email';
  const placeholder = 'Type your email';
  const {getByText} = render(
    <Multiselect options={options} label={label} placeholder={placeholder} />,
  );

  getByText(label);
  getByText(placeholder);
});

it('shows error message', () => {
  const error = 'Invalid input';
  const {getByText} = render(<Multiselect options={options} error={error} />);
  getByText(error);
});

it('shows hint message', () => {
  const hint = 'Hint message';
  const {getByText} = render(<Multiselect options={options} hint={hint} />);
  getByText(hint);
});

it('shows multiselect value', () => {
  const value = ['one', 4];
  const {getByText} = render(
    <Multiselect options={options} selectedOptions={value} />,
  );
  getByText('One, Four');
});

it('fires onChange function', () => {
  const testId = 'multiselect-test';
  const onChange = jest.fn();
  const {getByTestId, getByText} = render(
    <Multiselect testID={testId} onChange={onChange} options={options} />,
  );
  fireEvent.press(getByTestId(testId));
  fireEvent.press(getByText('One'));
  expect(onChange).toHaveBeenCalled();
});

it('fires onDropdownChange function', () => {
  const testId = 'multiselect-test';
  const onDropdownChange = jest.fn();
  const {getByTestId} = render(
    <Multiselect
      testID={testId}
      onDropdownChange={onDropdownChange}
      options={options}
    />,
  );
  fireEvent.press(getByTestId(testId));
  expect(onDropdownChange).toHaveBeenCalled();
});
