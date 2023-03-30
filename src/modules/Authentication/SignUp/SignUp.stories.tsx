import React from 'react';
import {ComponentMeta} from '@storybook/react-native';
import EmailModule from './Email';
import EmailCode from './Email/code';
import EmailVerificationModule from './EmailVerification';
import EmailVerificationCode from './EmailVerification/code';
import PhoneNumberModule from './PhoneNumber';
import PhoneNumberCode from './PhoneNumber/code';
import PhoneNumberVerificationModule from './PhoneNumberVerification';
import PhoneNumberVerificationCode from './PhoneNumberVerification/code';
import pkg from './package.json';
import {ComponentStory} from '@storybook/react';

export default {
  title: 'Modules/Authentication/SignUp',
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof EmailModule>;

const EmailTemplate: ComponentStory<typeof EmailModule> = () => <EmailModule />;
const EmailVerificationTemplate: ComponentStory<
  typeof EmailVerificationModule
> = () => <EmailVerificationModule />;
const PhoneNumberTemplate: ComponentStory<typeof PhoneNumberModule> = () => (
  <PhoneNumberModule />
);
const PhoneNumberVerificationTemplate: ComponentStory<
  typeof PhoneNumberVerificationModule
> = () => <PhoneNumberVerificationModule />;

export const Email = EmailTemplate.bind({});
Email.parameters = {
  docs: {
    source: {
      code: EmailCode,
      state: 'open',
    },
  },
};

export const EmailVerification = EmailVerificationTemplate.bind({});
EmailVerification.parameters = {
  docs: {
    source: {
      code: EmailVerificationCode,
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

export const PhoneNumberVerification = PhoneNumberVerificationTemplate.bind({});
PhoneNumberVerification.parameters = {
  docs: {
    source: {
      code: PhoneNumberVerificationCode,
      state: 'open',
    },
  },
};
