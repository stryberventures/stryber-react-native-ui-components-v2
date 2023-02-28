import React from 'react';
import {ComponentMeta} from '@storybook/react-native';
import EmailLogin from './Email';
import pkg from './package.json';
import code from './Email/LoginEmailCode';
import {ComponentStory} from '@storybook/react';

export default {
  title: 'Modules/Login',
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof EmailLogin>;

const Template: ComponentStory<typeof EmailLogin> = () => <EmailLogin />;

export const Email = Template.bind({});
Email.parameters = {
  docs: {
    source: {
      code,
      state: 'open',
    },
  },
};
