import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Select from '.';
import CenterView from '../../storybook/preview/CenterView';

export default {
  title: 'Select',
  component: Select,
  decorators: [CenterView],
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = args => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Select',
  options: [
    {label: 'Option 1', value: 1},
    {label: 'Option 2', value: 2},
  ],
  placeholder: 'Select an option',
};
