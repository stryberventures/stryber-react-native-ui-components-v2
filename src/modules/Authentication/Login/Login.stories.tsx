import React from 'react';
import {ComponentMeta} from '@storybook/react-native';
import EmailLogin from './Email';
import EmailLoginCode from './Email/code';
import PhoneNumberLogin from './PhoneNumber';
import PhoneNumberLoginCode from './PhoneNumber/code';
import pkg from './package.json';
import {ComponentStory} from '@storybook/react';

export default {
  title: 'Modules/Authentication/Login',
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof EmailLogin>;

const EmailTemplate: ComponentStory<typeof EmailLogin> = () => <EmailLogin />;
const PhoneNumberTemplate: ComponentStory<typeof PhoneNumberLogin> = () => (
  <PhoneNumberLogin />
);

export const Email = EmailTemplate.bind({});
Email.parameters = {
  docs: {
    source: {
      code: EmailLoginCode,
      state: 'open',
    },
  },
};

export const PhoneNumber = PhoneNumberTemplate.bind({});
PhoneNumber.parameters = {
  docs: {
    source: {
      code: PhoneNumberLoginCode,
      state: 'open',
    },
  },
};
