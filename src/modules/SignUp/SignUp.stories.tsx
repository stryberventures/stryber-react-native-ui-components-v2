import React from 'react';
import {ComponentMeta} from '@storybook/react-native';
import EmailSignUp from './Email';
import pkg from './package.json';
import {ComponentStory} from '@storybook/react';
import code from './Email/SignUpEmailCode';

export default {
  title: 'Modules/SignUp',
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof EmailSignUp>;

const Template: ComponentStory<typeof EmailSignUp> = () => <EmailSignUp />;

export const Email = Template.bind({});
Email.parameters = {
  docs: {
    source: {
      code,
      state: 'open',
    },
  },
};
