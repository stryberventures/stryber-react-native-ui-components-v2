import React from 'react';
import {View} from 'react-native';
import {StoryFnReactReturnType} from '@storybook/react-native';

const CenterView = (Story: () => StoryFnReactReturnType) => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        justifyContent: 'center',
        height: '100%',
        paddingHorizontal: 20,
      }}
    >
      <Story />
    </View>
  );
};

export default CenterView;
