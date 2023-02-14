import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import CheckboxGroup from '.';
import CenterView from '../../storybook/preview/CenterView';
import {Platform, View} from 'react-native';
import Text from '../Text';
import pkg from './package.json';
import Divider from '../../storybook/preview/Divider';

export default {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
  decorators: Platform.OS === 'web' ? null : [CenterView],
  argTypes: {
    label: {control: 'text'},
  },
  parameters: {
    pkg,
    controls: {
      exclude: [
        'name',
        'onChange',
        'clearFormValueOnUnmount',
        'style',
        'pressedStyle',
        'textStyle',
        'labelStyle',
        'controlled',
      ],
    },
  },
} as ComponentMeta<typeof CheckboxGroup>;

const Template: ComponentStory<typeof CheckboxGroup> = ({name: _, ...args}) => {
  const [selected, setSelected] = useState<string[]>([]);
  return (
    <View>
      <CheckboxGroup
        name="checkboxGroup"
        onChange={selectedCheckboxes => setSelected(selectedCheckboxes)}
        {...args}
      />
      <Divider />
      <Text variant="body1" weight="semiBold">
        Selected:
      </Text>
      <Text>{selected.join(', ')}</Text>
    </View>
  );
};

const childCheckboxes = [
  {
    label: 'first child',
    name: 'firstField',
  },
  {
    label: 'second child',
    name: 'secondField',
  },
  {
    label: 'third child',
    name: 'thirdField',
  },
  {
    label: 'fourth child',
    name: 'fourthField',
  },
];

export const Primary = Template.bind({});
Primary.args = {
  label: 'Checkbox Group',
  checkboxes: childCheckboxes,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Checkbox Group',
  checkboxes: childCheckboxes,
  color: 'secondary',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Checkbox Group',
  checkboxes: childCheckboxes.map(obj => ({...obj, error: 'Test error'})),
  color: 'secondary',
  error: 'Test error',
};
