import React from 'react';
import {render} from '@testing-library/react-native';
import {ThemeProvider} from '.';
import Button from '../Button';

it('should render child', () => {
  const label = 'Button';
  const screen = render(<Button>{label}</Button>, {wrapper: ThemeProvider});
  expect(screen.getByText(label)).toBeTruthy();
});

it('should pass theme colors', () => {
  const newPrimaryMainColor = 'red';
  const newTheme = {primary: {main: newPrimaryMainColor}};
  const buttonTestId = 'test-button';
  const screen = render(
    <ThemeProvider initial={newTheme}>
      <Button variant="contained" testID={buttonTestId}>
        Button
      </Button>
    </ThemeProvider>,
  );
  const button = screen.getByTestId(buttonTestId);
  //Get initial button styles
  const buttonStyles = button.props.style[0];
  expect(buttonStyles.backgroundColor).toBe(newPrimaryMainColor);
});
