import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Dialog, {IDialogProps} from '.';
import Button from '../Button';
import Text from '../Text';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
import pkg from './package.json';
import {vocab} from '../../storybook/preview/i18n';

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
      <Button onPress={() => setOpen(true)}>
        {vocab.components.dialog.openDialog}
      </Button>
      <Dialog {...args} onClose={closeDialog} open={open}>
        <Dialog.Title>{vocab.components.dialog.title}</Dialog.Title>
        <Text>{vocab.components.dialog.text}</Text>
        <Dialog.Actions>
          <Button
            variant="outlined"
            size="small"
            style={buttonMargin}
            onPress={closeDialog}
          >
            {vocab.components.dialog.discard}
          </Button>
          <Button size="small" onPress={closeDialog}>
            {vocab.components.dialog.cancel}
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
