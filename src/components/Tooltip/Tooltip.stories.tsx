import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Tooltip from '.';
import CenterView from '../../storybook/preview/CenterView';
import {Platform, View} from 'react-native';
import pkg from './package.json';

export default {
  title: 'Tooltip',
  component: Tooltip,
  decorators: [
    Platform.OS === 'web' ? Story => Story() : CenterView,
    Platform.OS === 'web'
      ? Story => <View style={{paddingTop: 70}}>{Story()}</View>
      : Story => <Story />,
  ],
  parameters: {
    pkg,
  },
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

export const TopStart = Template.bind({});
TopStart.args = {
  position: 'topStart',
};

export const TopEnd = Template.bind({});
TopEnd.args = {
  position: 'topEnd',
};

export const Left = Template.bind({});
Left.args = {
  position: 'left',
};

export const LeftStart = Template.bind({});
LeftStart.args = {
  position: 'leftStart',
};

export const LeftEnd = Template.bind({});
LeftEnd.args = {
  position: 'leftEnd',
};

export const Right = Template.bind({});
Right.args = {
  position: 'right',
};

export const RightStart = Template.bind({});
RightStart.args = {
  position: 'rightStart',
};

export const RightEnd = Template.bind({});
RightEnd.args = {
  position: 'rightEnd',
};

export const Bottom = Template.bind({});
Bottom.args = {
  position: 'bottom',
};

export const BottomStart = Template.bind({});
BottomStart.args = {
  position: 'bottomStart',
};

export const BottomEnd = Template.bind({});
BottomEnd.args = {
  position: 'bottomEnd',
};

export const WithCloseButton = Template.bind({});
WithCloseButton.args = {
  withCloseButton: true,
};
