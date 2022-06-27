import {render} from '@testing-library/react-native';
import React from 'react';
import Text from '.';

it('should be rendered', () => {
  const label = 'Test text';
  const {getByText} = render(<Text>{label}</Text>);
  expect(getByText(label)).toBeTruthy();
});
