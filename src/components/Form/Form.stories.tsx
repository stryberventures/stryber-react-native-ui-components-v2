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
import Checkbox from '../Checkbox';
import Switch from '../Switch';
import Multiselect, {IMultiselectOption} from '../Multiselect';
import Divider from '../../storybook/preview/Divider';

export default {
  title: 'Form',
  component: Form,
  decorators: [CenterView],
} as ComponentMeta<typeof Form>;

const multiselectOptions: IMultiselectOption[] = [
  {label: 'One', value: 'one'},
  {label: 'Two', value: 'two'},
  {label: 'Three for length testing', value: 'three'},
  {label: 'Four', value: 'four'},
  {label: 'Five', value: 'five'},
  {label: 'Six', value: 'six'},
];

const Template: ComponentStory<typeof Form> = ({
  // removed onValidateAsync from props(web storybook error)
  onValidateAsync: _,
  onValidate: _1,
  ...rest
}) => {
  return (
    <Form {...rest}>
      <Multiselect
        label="Multiselect"
        placeholder="multiselect"
        name="multiselect"
        options={multiselectOptions}
      />
      <Divider height={10} />
      <RadioButton name="radio" value="option 1" label="Option 1" />
      <Divider height={10} />
      <RadioButton name="radio" value="option 2" label="Option 2" />
      <Divider height={10} />
      <RadioButton name="radio" value="option 3" label="Option 3" />
      <Divider height={10} />
      <Checkbox name="checkbox" label="Stay logged in" />
      <Divider height={10} />
      <Switch name="switch" label="Switch" />
      <Divider height={10} />
      <Input
        name="email"
        placeholder="Email"
        label="Email"
        // eslint-disable-next-line react-native/no-inline-styles
        style={{marginVertical: 20}}
      />
      <Divider height={10} />
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
  initialValues: {
    email: 'myemail@example.com',
    password: 'mypassword',
    multiselect: ['one', 'two'],
    checkbox: true,
    radio: 'option 2',
    switch: true,
  },
};

export const WithValidation = Template.bind({});
WithValidation.args = {
  onSubmit: (formData: any) => {
    console.log('onSubmit external', formData);
  },
  onReset: (formData: any) => {
    console.log('onReset external', formData);
  },
  validationSchema: yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
    checkbox: yup.boolean().required(),
    switch: yup.boolean().required(),
    multiselect: yup.array().min(1).required(),
  }),
};

export const ErrorOnSubmit = Template.bind({});
ErrorOnSubmit.args = {
  onSubmit: (formData: any, {setError}) => {
    console.log('onSubmit external', formData);
    setError({email: 'This email is already taken'});
  },
  validationSchema: yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
    checkbox: yup.boolean().required(),
    switch: yup.boolean().required(),
    multiselect: yup.array().min(1).required(),
  }),
};

export const ResetOnSubmit = Template.bind({});
ResetOnSubmit.args = {
  onSubmit: (formData: any, {resetForm}) => {
    console.log('onSubmit external', formData);
    resetForm();
  },
};

// @ts-ignore
export const ExternalControl = ExternalFormControl;
