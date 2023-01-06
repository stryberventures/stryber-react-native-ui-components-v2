import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Tag, {TagGroup} from '.';
import * as Icons from '../Icons';
import CenterView from '../../storybook/preview/CenterView';
import {Platform, View, ViewStyle} from 'react-native';
import pkg from './package.json';
import Divider from '../../storybook/preview/Divider';
import {Alert} from 'react-native';
import Button from '../Button';
export default {
  title: 'Tag',
  component: Tag,
  decorators: Platform.OS === 'web' ? null : [CenterView],
  args: {
    children: 'Tag Label',
  },
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof Tag>;

//To display properly on the web storybook
const alignFlexStart: ViewStyle = {alignItems: 'flex-start'};

const Template: ComponentStory<typeof Tag> = args => (
  <View style={alignFlexStart}>
    <Tag size="large" {...args} />
    <Divider />
    <Tag size="medium" {...args} />
    <Divider />
    <Tag size="small" {...args} />
  </View>
);

export const Default = Template.bind({});

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
    Alert.alert(`remove tag with id: ${value}`);
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
          Tag 1
        </Tag>
        <Divider />
        <Tag iconLeft={Icons.LoadIcon} removable value={2}>
          Tag 2
        </Tag>
        <Divider />
        <Tag iconLeft={Icons.ProfileIcon} removable value={3}>
          Tag 3
        </Tag>
      </View>
      <Divider />
      <Button
        onPress={() => Alert.alert('Selected Tags:', selectedTags.join(', '))}
      >
        Show Selected Tags
      </Button>
    </TagGroup>
  );
};
