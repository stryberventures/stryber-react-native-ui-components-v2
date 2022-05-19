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
import Multiselect, {IMultiselectOption} from '../Multiselect';

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
      <RadioButton name="radio" value="option 1" label="Option 1" />
      <RadioButton name="radio" value="option 2" label="Option 2" />
      <RadioButton name="radio" value="option 3" label="Option 3" />
      <Checkbox name="checkbox" label="Stay logged in" />
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
  initialValues: {
    email: 'myemail@example.com',
    password: 'mypassword',
    multiselect: ['one', 'two'],
    checkbox: true,
    radio: 'option 2',
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
    email: yup.string().email(),
    password: yup.string().required(),
    radio: yup.string().required(),
    checkbox: yup.boolean().required(),
    multiselect: yup.array().min(1).required(),
  }),
};

// @ts-ignore
export const ExternalControl = ExternalFormControl;
