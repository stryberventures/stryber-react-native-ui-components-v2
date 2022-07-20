import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import TextLink from '.';
import * as Icons from '../Icons';

it('should be rendered with text', () => {
  const label = 'Test button';
  const {getByText} = render(<TextLink>{label}</TextLink>);
  expect(getByText(label)).toBeTruthy();
});

it('should call onPress handler', () => {
  const onPress = jest.fn();
  const label = 'TextLink';
  const screen = render(<TextLink onPress={onPress}>{label}</TextLink>);
  const textLink = screen.getByText(label);
  fireEvent.press(textLink);
  expect(onPress).toHaveBeenCalled();
});

it('should not call onPress handler when disabled', () => {
  const onPress = jest.fn();
  const label = 'TextLink';
  const screen = render(
    <TextLink onPress={onPress} disabled={true}>
      {label}
    </TextLink>,
  );
  const textLink = screen.getByText(label);
  fireEvent.press(textLink);
  expect(onPress).not.toHaveBeenCalled();
});

it('should contain the icon', () => {
  const screen = render(
    <TextLink iconRight={<Icons.InfoIcon testID="test-svg" />}>
      Button
    </TextLink>,
  );
  const icon = screen.getByTestId('test-svg');
  expect(icon).toBeTruthy();
});
