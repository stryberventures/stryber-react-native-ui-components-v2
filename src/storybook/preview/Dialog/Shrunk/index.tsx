import React from 'react';
import Dialog from '../../../../components/Dialog';
import Button from '../../../../components/Button';
import {vocab} from '../../i18n';

const ShrunkDialogExample = () => {
  const [open, setOpen] = React.useState(false);
  const closeDialog = () => setOpen(false);

  return (
    <>
      <Button onPress={() => setOpen(true)}>
        {vocab.components.dialog.openDialog}
      </Button>
      <Dialog onClose={closeDialog} open={open}>
        <Dialog.Title>{vocab.components.dialog.title}</Dialog.Title>
        <Dialog.Text>{vocab.components.dialog.text}</Dialog.Text>
        <Dialog.Actions shrunk>
          <Button
            variant="ghost"
            color="secondary"
            size="small"
            onPress={closeDialog}
          >
            {vocab.components.dialog.cancel}
          </Button>
          <Button size="small" onPress={closeDialog}>
            {vocab.components.dialog.confirm}
          </Button>
        </Dialog.Actions>
      </Dialog>
    </>
  );
};

export default ShrunkDialogExample;

export const ShrunkDialogExampleCode = `
  const ShrunkDialogExample = (args: IDialogProps) => {
  const [open, setOpen] = React.useState(false);
  const closeDialog = () => setOpen(false);

  return (
    <>
      <Button onPress={() => setOpen(true)}>
        {vocab.components.dialog.openDialog}
      </Button>
      <Dialog {...args} onClose={closeDialog} open={open}>
        <Dialog.Title>{vocab.components.dialog.title}</Dialog.Title>
        <Dialog.Text>{vocab.components.dialog.text}</Dialog.Text>
        <Dialog.Actions shrunk>
          <Button
            variant="ghost"
            color="secondary"
            size="small"
            onPress={closeDialog}
          >
            {vocab.components.dialog.cancel}
          </Button>
          <Button size="small" onPress={closeDialog}>
            {vocab.components.dialog.confirm}
          </Button>
        </Dialog.Actions>
      </Dialog>
    </>
  );
};
`;
