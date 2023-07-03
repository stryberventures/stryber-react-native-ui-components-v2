import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {SnackbarContent} from './index';
import pkg from './package.json';
import Divider from '../../storybook/preview/Divider';
import {Platform} from 'react-native';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';

export default {
  title: 'Components/Snackbar/SnackbarContent',
  component: SnackbarContent,
  decorators: Platform.OS === 'web' ? null : [CenterViewDecorator],
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof SnackbarContent>;

const snackbarContentVariants = [
  'default',
  'success',
  'warning',
  'error',
  'info',
] as const;

const Template: ComponentStory<typeof SnackbarContent> = ({
  onClose: _,
  ...rest
}) => (
  <>
    {snackbarContentVariants.map(variant => (
      <>
        <Divider />
        <SnackbarContent key={variant} {...rest} variant={variant} />
      </>
    ))}
  </>
);

export const AllVariants = Template.bind({});
AllVariants.args = {
  message: 'This is a snackbar',
  description: 'This is a description',
};
