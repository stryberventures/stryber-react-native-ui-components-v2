import React from 'react';
import {render} from '@testing-library/react-native';
import Avatar from '.';

it('should be rendered', () => {
  render(<Avatar />);
});

it('should render with status', () => {
  const {getByTestId} = render(<Avatar status="online" />);
  expect(getByTestId('gaia-avatar-status')).toBeTruthy();
});
