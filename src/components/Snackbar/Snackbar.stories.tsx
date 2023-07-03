import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Snackbar from '.';
import Button from '../Button';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
import {Platform} from 'react-native';
import pkg from './package.json';

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
    console.log('close');
  };

  return (
    <>
      <Button onPress={() => setOpen(true)}>Show snackbar</Button>
      <Snackbar open={open} onClose={handleClose} {...args} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  message: 'This is a snackbar',
  description: 'This is a description',
};

export const Info = Template.bind({});
Info.args = {
  message: 'This is a snackbar',
  description: 'This is a description',
  variant: 'info',
};

export const Warning = Template.bind({});
Warning.args = {
  message: 'This is a snackbar',
  description: 'This is a description',
  variant: 'warning',
};

export const Error = Template.bind({});
Error.args = {
  message: 'This is a snackbar',
  description: 'This is a description',
  variant: 'error',
};

export const Success = Template.bind({});
Success.args = {
  message: 'This is a snackbar',
  description: 'This is a description',
  variant: 'success',
};

export const Center = Template.bind({});
Center.args = {
  message: 'This is a snackbar',
  description: 'This is a description',
  variant: 'success',
  position: 'center',
};

export const Bottom = Template.bind({});
Bottom.args = {
  message: 'This is a snackbar',
  description: 'This is a description',
  variant: 'success',
  position: 'bottom',
};
