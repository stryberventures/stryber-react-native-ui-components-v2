import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Tag from '.';
import * as Icons from '../Icons';

it('should be rendered', () => {
  const label = 'Test tag';
  const {getByText} = render(<Tag>{label}</Tag>);
  expect(getByText(label)).toBeTruthy();
});

it('should call onChange handler', () => {
  const onChange = jest.fn();
  const label = 'Tag';
  const screen = render(<Tag onChange={onChange}>{label}</Tag>);
  const tag = screen.getByText(label);
  fireEvent.press(tag);
  expect(onChange).toHaveBeenCalled();
});

it('should not call onChange handler when disabled', () => {
  const onChange = jest.fn();
  const label = 'Tag';
  const screen = render(
    <Tag onChange={onChange} disabled={true}>
      {label}
    </Tag>,
  );
  const tag = screen.getByText(label);
  fireEvent.press(tag);
  expect(onChange).not.toHaveBeenCalled();
});

it('should contain the icon', () => {
  const screen = render(
    <Tag iconRight={() => <Icons.InfoIcon testID="test-svg" />}>Button</Tag>,
  );
  const icon = screen.getByTestId('test-svg');
  expect(icon).toBeTruthy();
});
