import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import List, {IListItem} from '.';
import pkg from './package.json';
import {Text, View, Platform} from 'react-native';
import {InfoIcon} from '../Icons';

const title = 'One-line Item';
const subtitle = 'Secondary Text';
const leftContent = <InfoIcon fill="#667085" />;
const rightContent = <Text>01</Text>;

const listItems: IListItem[] = new Array(4).fill({title});

export default {
  title: 'Components/List',
  component: List,
  parameters: {
    pkg,
    controls: {
      exclude: ['listItems'],
    },
  },
} as ComponentMeta<typeof List>;

const mobilePadding = {paddingTop: 200};

const Template: ComponentStory<typeof List> = args => (
  <>
    {Platform.OS !== 'web' && <View style={mobilePadding} />}
    <List {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  listItems,
};

export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
  listItems: listItems.map(item => ({...item, subtitle})),
};

export const WithLeftRightContent = Template.bind({});
WithLeftRightContent.args = {
  listItems: listItems.map(item => ({
    ...item,
    subtitle,
    leftContent,
    rightContent,
  })),
};
