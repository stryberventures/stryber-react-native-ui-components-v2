import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import Slider from '.';

//TODO: find a way how to test slider buttons

it('renders with labels', () => {
  const max = 10;
  const min = 2;
  const {getByText} = render(<Slider min={min} max={max} value={3} />);

  getByText(String(max));
  getByText(String(min));
});

it('shows input on touch', () => {
  const max = 10;
  const min = 2;
  const {getByTestId} = render(
    <Slider min={min} max={max} showInput showTooltip={false} value={3} />,
  );
  fireEvent.press(getByTestId('slider_button_up'));
  getByTestId('slider_input_up');
});
