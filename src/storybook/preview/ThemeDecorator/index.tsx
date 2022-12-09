import React from 'react';
import {StoryFnReactReturnType} from '@storybook/react-native';
import {Platform} from 'react-native';
import {ThemeProvider} from '../../../components/Theme';

export const customFontTheme = {
  fontFamily: Platform.OS === 'web' ? 'Inter, sans-serif' : 'Inter',
};

const ThemeDecorator = (Story: () => StoryFnReactReturnType) => {
  return (
    <ThemeProvider theme={customFontTheme}>
      <Story />
    </ThemeProvider>
  );
};

export default ThemeDecorator;
