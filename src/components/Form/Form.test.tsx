import React, {FC} from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import Form, {IFormProps} from '.';
import Input from '../Input';
import Button from '../Button';

const submitButtonTestId = 'Button.Submit';
const resetButtonTestId = 'Button.Reset';

const Template: FC<IFormProps> = props => (
  <Form {...props}>
    <Input
      name="email"
      placeholder="Email"
      label="Email"
      style={{marginBottom: 20}}
    />
    <Input name="password" placeholder="Password" label="Password" />
    <Button type="submit" testID={submitButtonTestId}>
      Submit
    </Button>
    <Button type="reset" testID={resetButtonTestId}>
      Reset
    </Button>
  </Form>
);

it('renders', () => {
  render(<Template />);
});

it('fires onSubmit callback', () => {
  const onSubmit = jest.fn();
  const {getByTestId} = render(<Template onSubmit={onSubmit} />);
  fireEvent.press(getByTestId(submitButtonTestId));
  expect(onSubmit).toHaveBeenCalled();
});

it('fires onReset callback', () => {
  const onReset = jest.fn();
  const {getByTestId} = render(<Template onSubmit={onReset} />);
  fireEvent.press(getByTestId(submitButtonTestId));
  expect(onReset).toHaveBeenCalled();
});
