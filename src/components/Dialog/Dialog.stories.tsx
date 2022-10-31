import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Dialog, {IDialogProps} from '.';
import Button from '../Button';
import Text from '../Text';
import CenterView from '../../storybook/preview/CenterView';
import pkg from './package.json';

export default {
  title: 'Dialog',
  component: Dialog,
  decorators: [CenterView],
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof Dialog>;

const DialogStory = (args: IDialogProps) => {
  const [open, setOpen] = React.useState(false);
  const closeDialog = () => setOpen(false);

  return (
    <>
      <Button onPress={() => setOpen(true)}>Open Dialog</Button>
      <Dialog {...args} onCancel={closeDialog} open={open}>
        <Dialog.Title>Discard draft?</Dialog.Title>
        <Text variant="body">Discard draft?</Text>
        <Dialog.Actions>
          <Button
            variant="outlined"
            size="small"
            style={{marginRight: 12}}
            onPress={closeDialog}
          >
            Discard
          </Button>
          <Button size="small" onPress={closeDialog}>
            Cancel
          </Button>
        </Dialog.Actions>
      </Dialog>
    </>
  );
};

const Template: ComponentStory<typeof Dialog> = args => (
  <DialogStory {...args} />
);

export const Default = Template.bind({});
