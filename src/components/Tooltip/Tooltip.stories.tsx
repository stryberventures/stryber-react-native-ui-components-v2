import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Tooltip from '.';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
import {Platform, View} from 'react-native';
import pkg from './package.json';
import useStyles from './Tooltip.styles.stories';
import {vocab} from '../../storybook/preview/i18n';

const webPadding = {paddingTop: 70};

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  decorators: [
    Platform.OS === 'web' ? Story => Story() : CenterViewDecorator,
    Platform.OS === 'web'
      ? Story => <View style={webPadding}>{Story()}</View>
      : Story => <Story />,
  ],
  argTypes: {
    title: {control: 'text'},
    content: {control: 'text'},
  },
  parameters: {
    pkg,
    controls: {
      exclude: [
        'wrapperStyle',
        'titleStyle',
        'textStyle',
        'controlled',
        'style',
        'visible',
        'onChange',
      ],
    },
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = args => {
  const styles = useStyles();
  return (
    <Tooltip
      title={vocab.components.tooltip.title}
      content={vocab.components.tooltip.content}
      wrapperStyle={styles.wrapper}
      {...args}>
      <View style={styles.block} />
    </Tooltip>
  );
};

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

export const Dark = Template.bind({});
Dark.args = {
  variant: 'dark',
};

export const WithArrow = Template.bind({});
WithArrow.args = {
  arrow: true,
};
