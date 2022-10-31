import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Dialog from '.';
import Button from '../Button';
import Text from '../Text';

it('should be rendered with title, text and buttons if opened', () => {
  const title = 'Test dialog';
  const text = 'Content here';
  const successButton = 'Fine';
  const cancelButton = 'No';
  const {getByText} = render(
    <Dialog onClose={() => {}} open={true}>
      <Dialog.Title>{title}</Dialog.Title>
      <Text variant="body">{text}</Text>
      <Dialog.Actions>
        <Button
          variant="outlined"
          size="small"
          style={{marginRight: 12}}
          onPress={() => {}}
        >
          {successButton}
        </Button>
        <Button size="small" onPress={() => {}}>
          {cancelButton}
        </Button>
      </Dialog.Actions>
    </Dialog>,
  );
  expect(getByText(title)).toBeTruthy();
  expect(getByText(text)).toBeTruthy();
  expect(getByText(successButton)).toBeTruthy();
  expect(getByText(cancelButton)).toBeTruthy();
});

it("shouldn't render Dialog if closed", () => {
  const title = 'Test dialog';
  const {getByText} = render(
    <Dialog onClose={() => {}} open={false}>
      <Dialog.Title>{title}</Dialog.Title>
      <Dialog.Actions>
        <Button
          variant="outlined"
          size="small"
          style={{marginRight: 12}}
          onPress={() => {}}
        >
          Success
        </Button>
        <Button size="small" onPress={() => {}}>
          Cancel
        </Button>
      </Dialog.Actions>
    </Dialog>,
  );
  expect(() => getByText(title)).toThrowError();
});

it('should fire success and cancel functions on buttons press', () => {
  const onConfirm = jest.fn();
  const onCancel = jest.fn();
  const successBtnText = 'Success';
  const cancelBtnText = 'Cancel';
  const {getByText} = render(
    <Dialog onClose={onCancel} open={true}>
      <Dialog.Actions>
        <Button
          variant="outlined"
          size="small"
          style={{marginRight: 12}}
          onPress={onConfirm}
        >
          {successBtnText}
        </Button>
        <Button size="small" onPress={onCancel}>
          {cancelBtnText}
        </Button>
      </Dialog.Actions>
    </Dialog>,
  );
  fireEvent.press(getByText(successBtnText));
  expect(onConfirm).toHaveBeenCalled();
  fireEvent.press(getByText(cancelBtnText));
  expect(onCancel).toHaveBeenCalled();
});
