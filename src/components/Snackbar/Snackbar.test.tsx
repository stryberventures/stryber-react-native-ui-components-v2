import * as React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Snackbar, {SnackbarContent} from './index';

it('should be rendered with message', () => {
  const message = 'SnackbarContent message';
  const {getByText} = render(<SnackbarContent message={message} />);
  getByText(message);
});

it('should be rendered with description', () => {
  const description = 'SnackbarContent description';
  const {getByText} = render(<SnackbarContent description={description} />);
  getByText(description);
});

it('should contain icon', () => {
  const {getByTestId} = render(<SnackbarContent variant="info" />);
  getByTestId('gaia-snackbar-icon');
});

it('should fire onClose', () => {
  const onClose = jest.fn();
  const {getByTestId} = render(
    <Snackbar variant="info" onClose={onClose} open={true} />,
  );
  const closeButton = getByTestId('gaia-snackbar-close-button');
  fireEvent.press(closeButton);
  expect(onClose).toHaveBeenCalled();
});
