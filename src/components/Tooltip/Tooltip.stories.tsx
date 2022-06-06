import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Tooltip from '.';
import CenterView from '../../storybook/preview/CenterView';
import {Platform, View} from 'react-native';

export default {
  title: 'Tooltip',
  component: Tooltip,
  decorators: [
    CenterView,
    Platform.OS === 'web'
      ? Story => (
          <View style={{paddingTop: 200}}>
            <Story />
          </View>
        )
      : Story => <Story />,
  ],
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = args => (
  <Tooltip
    title="Tooltip title"
    text="Tooltip inner text"
    wrapperStyle={{alignSelf: 'center'}}
    {...args}
  >
    <View style={{height: 50, width: 50, backgroundColor: 'red'}} />
  </Tooltip>
);

export const Top = Template.bind({});

export const Left = Template.bind({});
Left.args = {
  position: 'left',
};

export const Right = Template.bind({});
Right.args = {
  position: 'right',
};

export const Bottom = Template.bind({});
Bottom.args = {
  position: 'bottom',
};

export const WithCloseButton = Template.bind({});
WithCloseButton.args = {
  withCloseButton: true,
};
