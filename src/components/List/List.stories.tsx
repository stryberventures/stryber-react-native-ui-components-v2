import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import List, {ListItem, ListItemText} from '.';
import Switch from '../Switch';
import pkg from './package.json';
import {View, Platform} from 'react-native';
import {InfoIcon} from '../Icons';
import {vocab} from '../../storybook/preview/i18n';

const title = vocab.components.list.title;
const label = vocab.components.list.label;
const subtitle = vocab.components.list.subtitle;
const leftContent = <InfoIcon />;
const rightContent = <Switch controlCentered />;

const listItems = new Array(4).fill({title});

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

export const Medium = Template.bind({});
Medium.args = {
  children: listItems.map(item => (
    <ListItem key={item.title + Math.random()} {...item}>
      <ListItemText primary={item.title} />
    </ListItem>
  )),
};

export const WithDivider = Template.bind({});
WithDivider.args = {
  children: listItems.map((item, idx) => (
    <ListItem
      divider={idx !== listItems.length - 1}
      key={item.title + Math.random()}
      {...item}>
      <ListItemText primary={item.title} />
    </ListItem>
  )),
};

export const Small = Template.bind({});
Small.args = {
  children: listItems.map(item => (
    <ListItem size="small" key={item.title + Math.random()} {...item}>
      <ListItemText primary={item.title} />
    </ListItem>
  )),
};

export const Large = Template.bind({});
Large.args = {
  children: listItems.map(item => (
    <ListItem size="large" key={item.title + Math.random()} {...item}>
      <ListItemText primary={item.title} />
    </ListItem>
  )),
};

export const WithLabelAndSecondary = Template.bind({});
WithLabelAndSecondary.args = {
  children: listItems.map(item => (
    <ListItem key={item.title + Math.random()} {...item}>
      <ListItemText label={label} primary={item.title} secondary={subtitle} />
    </ListItem>
  )),
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: listItems.map(item => (
    <ListItem disabled key={item.title + Math.random()} {...item}>
      <ListItemText
        disabled
        label={label}
        primary={item.title}
        secondary={subtitle}
      />
    </ListItem>
  )),
};

export const WithLeftRightContent = Template.bind({});
WithLeftRightContent.args = {
  children: listItems.map(item => (
    <ListItem
      key={item.title + Math.random()}
      {...item}
      leftContent={leftContent}
      rightContent={rightContent}>
      <ListItemText label={label} primary={item.title} secondary={subtitle} />
    </ListItem>
  )),
};
