import React from 'react';
import {render} from '@testing-library/react-native';

import TextArea from '.';

it('renders default elements', () => {
  const label = 'Text';
  const placeholder = 'Type your text';
  const {getByText, getByPlaceholderText} = render(
    <TextArea label={label} placeholder={placeholder} />,
  );

  getByText(label);
  getByPlaceholderText(placeholder);
});

it('shows invalid input message', () => {
  const error = 'Invalid input';
  const {getByText} = render(<TextArea error={error} />);
  getByText(error);
});

it('shows hint input message', () => {
  const hint = 'Hint message';
  const {getByText} = render(<TextArea hint={hint} />);
  getByText(hint);
});

it('shows input value', () => {
  const value = 'Test value';
  const {getByDisplayValue} = render(<TextArea value={value} />);
  getByDisplayValue(value);
});
