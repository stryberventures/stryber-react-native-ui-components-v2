import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Dialog, {IDialogProps} from '.';
import Button from '../Button';
import Text from '../Text';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
import pkg from './package.json';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  decorators: [CenterViewDecorator],
  parameters: {
    pkg,
    controls: {
      exclude: ['onClose', 'open', 'overlayStyle', 'disableOutsidePress'],
    },
  },
} as ComponentMeta<typeof Dialog>;

const buttonMargin = {marginRight: 12};

const DialogStory = (args: IDialogProps) => {
  const [open, setOpen] = React.useState(false);
  const closeDialog = () => setOpen(false);

  return (
    <>
      <Button onPress={() => setOpen(true)}>Open Dialog</Button>
      <Dialog {...args} onClose={closeDialog} open={open}>
        <Dialog.Title>Discard draft?</Dialog.Title>
        <Text>Discard draft?</Text>
        <Dialog.Actions>
          <Button
            variant="outlined"
            size="small"
            style={buttonMargin}
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
