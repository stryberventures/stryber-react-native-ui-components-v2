import React from 'react';
import * as yup from 'yup';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Input from '../Input';
import CenterView from '../../storybook/preview/CenterView';
import Form from '.';
import Button from '../Button';
import {View} from 'react-native';
import ExternalFormControl from '../../storybook/preview/ExternalFormControl';
import RadioButton from '../RadioButton';

export default {
  title: 'Form',
  component: Form,
  decorators: [CenterView],
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = ({
  // removed onValidateAsync from props(web storybook error)
  onValidateAsync: _,
  ...rest
}) => {
  return (
    <Form {...rest}>
      <RadioButton name="radio" value="option 1" placeholder="Option 1" />
      <RadioButton name="radio" value="option 2" placeholder="Option 2" />
      <RadioButton name="radio" value="option 3" placeholder="Option 3" />
      <Input
        name="email"
        placeholder="Email"
        label="Email"
        // eslint-disable-next-line react-native/no-inline-styles
        style={{marginVertical: 20}}
      />
      <Input name="password" placeholder="Password" label="Password" />
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <Button type="submit">Login</Button>
        <Button type="reset">Reset</Button>
      </View>
    </Form>
  );
};

export const Default = Template.bind({});
Default.args = {
  onSubmit: (formData: any) => {
    console.log('onSubmit external', formData);
  },
  onReset: (formData: any) => {
    console.log('onReset external', formData);
  },
};

export const WithInitialValues = Template.bind({});
WithInitialValues.args = {
  onSubmit: (formData: any) => {
    console.log('onSubmit external', formData);
  },
  onReset: (formData: any) => {
    console.log('onReset external', formData);
  },
  initialValues: {email: 'myemail@example.com', password: 'mypassword'},
};

export const WithValidation = Template.bind({});
WithValidation.args = {
  onSubmit: (formData: any) => {
    console.log('onSubmit external', formData);
  },
  onReset: (formData: any) => {
    console.log('onReset external', formData);
  },
  initialValues: {email: 'myemail@example.com', password: 'mypassword'},
  validationSchema: yup.object({
    email: yup.string().email(),
    password: yup.string().required(),
  }),
};

export const ExternalControl = ExternalFormControl;
