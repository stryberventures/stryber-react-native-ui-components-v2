import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Button from '.';
import * as Icons from '../Icons';

it('should be rendered', () => {
  const label = 'Test button';
  const {getByText} = render(<Button>{label}</Button>);
  expect(getByText(label)).toBeTruthy();
});

it('should call onPress handler', () => {
  const onPress = jest.fn();
  const label = 'Button';
  const screen = render(<Button onPress={onPress}>{label}</Button>);
  const button = screen.getByText(label);
  fireEvent.press(button);
  expect(onPress).toHaveBeenCalled();
});

it('should not call onPress handler when disabled', () => {
  const onPress = jest.fn();
  const label = 'Button';
  const screen = render(
    <Button onPress={onPress} disabled={true}>
      {label}
    </Button>,
  );
  const button = screen.getByText(label);
  fireEvent.press(button);
  expect(onPress).not.toHaveBeenCalled();
});

it('should contain the icon', () => {
  const screen = render(
    <Button iconRight={() => <Icons.InfoIcon testID="test-svg" />}>
      Button
    </Button>,
  );
  const icon = screen.getByTestId('test-svg');
  expect(icon).toBeTruthy();
});
