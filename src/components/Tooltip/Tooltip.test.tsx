import React from 'react';
import Tooltip from '.';
import {render} from '@testing-library/react-native';
import {View} from 'react-native';

const tooltipTitle = 'Tooltip title';
const tooltipText = 'Tooltip inner text';
const tooltipTestId = 'tooltip-test';
const childTestId = 'child-test';

const TooltipWithChild = () => (
  <Tooltip
    title={tooltipTitle}
    text={tooltipText}
    wrapperStyle={{alignSelf: 'center'}}
    testID={tooltipTestId}
  >
    <View
      testID={childTestId}
      style={{height: 50, width: 50, backgroundColor: 'red'}}
    />
  </Tooltip>
);

it('renders', () => {
  render(<TooltipWithChild />);
});

it('displays children', async () => {
  const {getByTestId} = render(<TooltipWithChild />);
  getByTestId(childTestId);
});
