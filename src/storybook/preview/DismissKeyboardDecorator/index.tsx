import React from 'react';
import {Keyboard, Pressable} from 'react-native';
import {StoryFnReactReturnType} from '@storybook/react-native';

const DismissKeyboardDecorator = (Story: () => StoryFnReactReturnType) => {
  return (
    <Pressable onPress={Keyboard.dismiss}>
      <Story />
    </Pressable>
  );
};

export default DismissKeyboardDecorator;
