import React from 'react';
import {render} from '@testing-library/react-native';
import Divider from '.';

it('should be rendered', () => {
  const testId = 'divider-test';
  const {getByTestId} = render(<Divider testID={testId} />);
  expect(getByTestId(testId)).toBeTruthy();
});
