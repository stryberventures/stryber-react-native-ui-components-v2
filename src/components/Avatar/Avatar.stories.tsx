import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Avatar from '.';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
import {Platform} from 'react-native';
import pkg from './package.json';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  decorators: Platform.OS === 'web' ? null : [CenterViewDecorator],
  parameters: {
    pkg,
    controls: {
      exclude: ['style'],
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args} />;

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Square = Template.bind({});
Square.args = {
  shape: 'square',
};

export const Online = Template.bind({});
Online.args = {
  status: 'online',
};

export const Offline = Template.bind({});
Offline.args = {
  status: 'offline',
};

export const WithImage = Template.bind({});
WithImage.args = {
  src: 'https://avatars.githubusercontent.com/u/3702041?v=4',
};

export const WithImageAndStatus = Template.bind({});
WithImageAndStatus.args = {
  src: 'https://avatars.githubusercontent.com/u/3702041?v=4',
  status: 'online',
};
