import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Snackbar from '.';
import Button from '../Button';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
import {Platform} from 'react-native';
import pkg from './package.json';
import {vocab} from '../../storybook/preview/i18n';

export default {
  title: 'Components/Snackbar/Snackbar',
  component: Snackbar,
  decorators: Platform.OS === 'web' ? null : [CenterViewDecorator],
  parameters: {
    pkg,
    controls: {
      exclude: ['style'],
    },
  },
} as ComponentMeta<typeof Snackbar>;

const Template: ComponentStory<typeof Snackbar> = ({onClose: _, ...args}) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onPress={() => setOpen(true)}>
        {vocab.components.snackbar.message}
      </Button>
      <Snackbar open={open} onClose={handleClose} {...args} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  message: vocab.components.snackbar.message,
  description: vocab.components.snackbar.description,
};

export const Info = Template.bind({});
Info.args = {
  message: vocab.components.snackbar.message,
  description: vocab.components.snackbar.description,
  variant: 'info',
};

export const Warning = Template.bind({});
Warning.args = {
  message: vocab.components.snackbar.message,
  description: vocab.components.snackbar.description,
  variant: 'warning',
};

export const Error = Template.bind({});
Error.args = {
  message: vocab.components.snackbar.message,
  description: vocab.components.snackbar.description,
  variant: 'error',
};

export const Success = Template.bind({});
Success.args = {
  message: vocab.components.snackbar.message,
  description: vocab.components.snackbar.description,
  variant: 'success',
};

export const Center = Template.bind({});
Center.args = {
  message: vocab.components.snackbar.message,
  description: vocab.components.snackbar.description,
  variant: 'success',
  position: 'center',
};

export const Bottom = Template.bind({});
Bottom.args = {
  message: vocab.components.snackbar.message,
  description: vocab.components.snackbar.description,
  variant: 'success',
  position: 'bottom',
};
