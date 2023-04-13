import React from 'react';
import {ComponentMeta} from '@storybook/react-native';
import EmailModule from './Email';
import EmailCode from './Email/code';
import PhoneNumberModule from './PhoneNumber';
import PhoneNumberCode from './PhoneNumber/code';
import CreateNewPasswordModule from './CreateNewPassword';
import CreateNewPasswordCode from './CreateNewPassword/code';
import pkg from './package.json';
import {ComponentStory} from '@storybook/react';

export default {
  title: 'Modules/Authentication/ForgotPassword',
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof EmailModule>;

const EmailTemplate: ComponentStory<typeof EmailModule> = () => <EmailModule />;
const PhoneNumberTemplate: ComponentStory<typeof PhoneNumberModule> = () => (
  <PhoneNumberModule />
);
const CreateNewPasswordTemplate: ComponentStory<
  typeof CreateNewPasswordModule
> = () => <CreateNewPasswordModule />;

export const Email = EmailTemplate.bind({});
Email.parameters = {
  docs: {
    source: {
      code: EmailCode,
      state: 'open',
    },
  },
};

export const PhoneNumber = PhoneNumberTemplate.bind({});
PhoneNumber.parameters = {
  docs: {
    source: {
      code: PhoneNumberCode,
      state: 'open',
    },
  },
};

export const CreateNewPassword = CreateNewPasswordTemplate.bind({});
CreateNewPassword.parameters = {
  docs: {
    source: {
      code: CreateNewPasswordCode,
      state: 'open',
    },
  },
};
