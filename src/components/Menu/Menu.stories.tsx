import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Menu, {MenuItem, MenuItemText, MenuSearch} from '.';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
import {Platform} from 'react-native';
import pkg from './package.json';
import Avatar from '../Avatar';
import {vocab} from '../../storybook/preview/i18n';

export default {
  title: 'Components/Menu',
  component: Menu,
  decorators: Platform.OS === 'web' ? null : [CenterViewDecorator],
  parameters: {
    pkg,
    controls: {
      exclude: ['iconLeft', 'iconRight', 'style', 'textStyle'],
    },
  },
} as ComponentMeta<typeof Menu>;

const menuItems = new Array(6).fill({});

const menuLeftContent = <Avatar />;

const Template: ComponentStory<typeof Menu> = args => <Menu {...args} />;

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: menuItems.map((item, index) => (
    <MenuItem key={index} {...item}>
      <MenuItemText primary={vocab.components.menu.item} />
    </MenuItem>
  )),
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  children: menuItems.map((item, index) => (
    <MenuItem key={index} {...item}>
      <MenuItemText primary={vocab.components.menu.item} />
    </MenuItem>
  )),
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: menuItems.map((item, index) => (
    <MenuItem key={index} {...item}>
      <MenuItemText primary={vocab.components.menu.item} />
    </MenuItem>
  )),
};

export const WithLeftContent = Template.bind({});
WithLeftContent.args = {
  children: menuItems.map((item, index) => (
    <MenuItem leftContent={menuLeftContent} key={index} {...item}>
      <MenuItemText primary={vocab.components.menu.item} />
    </MenuItem>
  )),
};

export const WithSearch = () => {
  const [search, setSearch] = React.useState('');
  const cities = Object.values(vocab.components.menu.cities);
  const filteredItems = cities.filter(item =>
    item.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Menu size="large">
      <MenuSearch
        placeholder={vocab.components.menu.searchPlaceholder}
        onChangeText={text => setSearch(text)}
      />
      {filteredItems.map((item, index) => (
        <MenuItem key={index}>
          <MenuItemText primary={item} />
        </MenuItem>
      ))}
    </Menu>
  );
};
