import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Chip from '.';
import {Icons} from '../../index';

it('should be rendered', () => {
  const label = 'Test chip';
  const {getByText} = render(<Chip>{label}</Chip>);
  expect(getByText(label)).toBeTruthy();
});

it('should call onPress handler', () => {
  const onPress = jest.fn();
  const label = 'Chip';
  const screen = render(<Chip onPress={onPress}>{label}</Chip>);
  const chip = screen.getByText(label);
  fireEvent.press(chip);
  expect(onPress).toHaveBeenCalled();
});

it('should not call onPress handler when disabled', () => {
  const onPress = jest.fn();
  const label = 'Chip';
  const screen = render(
    <Chip onPress={onPress} disabled={true}>
      {label}
    </Chip>,
  );
  const chip = screen.getByText(label);
  fireEvent.press(chip);
  expect(onPress).not.toHaveBeenCalled();
});

it('should contain the icon', () => {
  const screen = render(
    <Chip iconRight={<Icons.InfoIcon testID="test-svg" />}>Button</Chip>,
  );
  const icon = screen.getByTestId('test-svg');
  expect(icon).toBeTruthy();
});
