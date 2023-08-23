import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import SearchInput from '.';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
import {Platform} from 'react-native';
import pkg from './package.json';
import DismissKeyboardDecorator from '../../storybook/preview/DismissKeyboardDecorator';
import {vocab} from '../../storybook/preview/i18n';

export default {
  title: 'Components/SearchInput',
  component: SearchInput,
  decorators:
    Platform.OS === 'web'
      ? null
      : [CenterViewDecorator, DismissKeyboardDecorator],
  args: {
    color: 'primary',
    placeholder: vocab.components.searchInput.placeholder,
    size: 'medium',
    disabled: false,
    hint: '',
  },
  argTypes: {
    size: {
      control: {type: 'radio', options: ['medium', 'large']},
    },
  },
  parameters: {
    pkg,
    controls: {
      exclude: [
        'name',
        'clearFormValueOnUnmount',
        'mask',
        'prefixStyle',
        'postfixStyle',
        'leftContent',
        'rightContent',
        'controlled',
        'errorStyle',
        'hintStyle',
        'inputStyle',
        'inputWrapperStyle',
        'style',
        'error',
        'withRemoveButton',
        'prefix',
        'postfix',
        'onRemove',
        'showLength',
      ],
    },
  },
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = args => (
  <SearchInput {...args} />
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: vocab.components.searchInput.disabled,
  disabled: true,
};

export const Hint = Template.bind({});
Hint.args = {
  value: vocab.components.searchInput.hintValue,
  hint: vocab.components.searchInput.hintMessage,
};
