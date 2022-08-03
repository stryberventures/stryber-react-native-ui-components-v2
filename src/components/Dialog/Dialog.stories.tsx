import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Dialog from '.';
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

const Template: ComponentStory<typeof Dialog> = args => <Dialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Contained',
};
