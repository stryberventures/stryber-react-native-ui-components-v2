import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import ThemeChooser from '../../storybook/preview/ThemeChooser';
import {defaultTheme} from './defaultTheme';
import pkg from './package.json';

export default {
  title: 'Theme',
  component: ThemeChooser,
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof ThemeChooser>;

const Template: ComponentStory<typeof ThemeChooser> = ({theme}) => {
  return <ThemeChooser theme={theme} />;
};

export const Theme = Template.bind({});
Theme.args = {
  theme: defaultTheme,
};
