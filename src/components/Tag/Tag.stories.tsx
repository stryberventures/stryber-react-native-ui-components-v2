import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Tag, {TagGroup} from '.';
import * as Icons from '../Icons';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
import {Platform, View, ViewStyle} from 'react-native';
import pkg from './package.json';
import Divider from '../../storybook/preview/Divider';
import {Alert} from 'react-native';
import {vocab} from '../../storybook/preview/i18n';

export default {
  title: 'Components/Tag',
  component: Tag,
  decorators: Platform.OS === 'web' ? null : [CenterViewDecorator],
  args: {
    children: vocab.components.tag.tagLabel,
  },
  parameters: {
    pkg,
    controls: {
      exclude: [
        'iconLeft',
        'iconRight',
        'value',
        'style',
        'onChange',
        'onRemove',
      ],
    },
  },
} as ComponentMeta<typeof Tag>;

//To display properly on the web storybook
const alignFlexStart: ViewStyle = {alignItems: 'flex-start'};

const Template: ComponentStory<typeof Tag> = ({children, ...args}) => (
  <View style={alignFlexStart}>
    <Tag size="large" {...args}>
      {children}
    </Tag>
    <Divider />
    <Tag size="medium" {...args}>
      {children}
    </Tag>
    <Divider />
    <Tag size="small" {...args}>
      {children}
    </Tag>
  </View>
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  iconLeft: Icons.ProfileCircleIcon,
};

export const IconRight = Template.bind({});
IconRight.args = {
  iconRight: Icons.ProfileCircleIcon,
};

export const Selected = Template.bind({});
Selected.args = {
  selected: true,
  iconLeft: Icons.ProfileCircleIcon,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  iconLeft: Icons.ProfileCircleIcon,
};

export const Removable = Template.bind({});
Removable.args = {
  value: 23,
  onRemove: value => {
    Alert.alert(vocab.components.tag.getAlertMessage(value));
  },
  removable: true,
};

export const TagsGroup = () => {
  const [selectedTags, setSelectedTags] = useState<number[]>([3]);
  return (
    <TagGroup
      selectedTags={selectedTags}
      onChange={selectedTagsFromContext => {
        setSelectedTags(selectedTagsFromContext);
      }}
    >
      <View style={alignFlexStart}>
        <Tag iconLeft={Icons.DocumentIcon} removable value={1}>
          {vocab.components.tag.tagText1}
        </Tag>
        <Divider />
        <Tag iconLeft={Icons.LoadIcon} removable value={2}>
          {vocab.components.tag.tagText2}
        </Tag>
        <Divider />
        <Tag iconLeft={Icons.ProfileIcon} removable value={3}>
          {vocab.components.tag.tagText3}
        </Tag>
      </View>
    </TagGroup>
  );
};
