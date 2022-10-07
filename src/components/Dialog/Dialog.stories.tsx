import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Dialog, {IDialogProps} from '.';
import Button from '../Button';
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
      <Dialog
        {...args}
        onCancel={closeDialog}
        onConfirm={closeDialog}
        open={open}
      />
    </>
  );
};

const Template: ComponentStory<typeof Dialog> = args => (
  <DialogStory {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Title',
  text: 'Some content here',
};
