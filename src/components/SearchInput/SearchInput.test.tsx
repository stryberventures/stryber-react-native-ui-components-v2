import React from 'react';
import {render} from '@testing-library/react-native';

import SearchInput from '.';

it('renders default elements', () => {
  const placeholder = 'Type your text';
  const {getByPlaceholderText} = render(
    <SearchInput placeholder={placeholder} />,
  );
  getByPlaceholderText(placeholder);
});

it('shows invalid input message', () => {
  const error = 'Invalid input';
  const {getByText} = render(<SearchInput error={error} />);
  getByText(error);
});

it('shows hint input message', () => {
  const hint = 'Hint message';
  const {getByText} = render(<SearchInput hint={hint} />);
  getByText(hint);
});

it('shows input value', () => {
  const value = 'Test value';
  const {getByDisplayValue} = render(<SearchInput value={value} />);
  getByDisplayValue(value);
});
