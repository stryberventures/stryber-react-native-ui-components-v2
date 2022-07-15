import React from 'react';
import {ScrollView, View} from 'react-native';
import * as yup from 'yup';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';

import Input from '../Input';
import PasswordInput from '../PasswordInput';
import CenterView from '../../storybook/preview/CenterView';
import Form from '.';
import Button from '../Button';
import ExternalFormControl from '../../storybook/preview/ExternalFormControl';
import RadioButton from '../RadioButton';
import Checkbox from '../Checkbox';
import Switch from '../Switch';
import Multiselect, {IMultiselectOption} from '../Multiselect';
import Slider from '../Slider';
import Combobox from '../Combobox';

import Divider from '../../storybook/preview/Divider';
import NumberInput from '../NumberInput';
import Select from '../Select';
import pkg from './package.json';
import FormDisabledSubmitButton from '../../storybook/preview/FormDisabledSubmitButton';

export default {
  title: 'Form',
  component: Form,
  decorators: [CenterView],
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof Form>;

const options: IMultiselectOption[] = [
  {label: 'One', value: 'one'},
  {label: 'Two', value: 'two'},
  {label: 'Three for length testing', value: 'three'},
  {label: 'Four', value: 'four'},
  {label: 'Five', value: 'five'},
  {label: 'Six', value: 'six'},
];

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
  checkbox: yup.boolean().required(),
  switch: yup.boolean().required(),
  multiselect: yup.array().min(1).required(),
  select: yup.string().required(),
  numberInput: yup.number().required(),
  combobox: yup.string().required(),
});

const Template: ComponentStory<typeof Form> = ({
  // removed onValidateAsync from props(web storybook error)
  onValidateAsync: _,
  onValidate: _1,
  ...rest
}) => {
  return (
    <Form {...rest}>
      <ScrollView
        contentContainerStyle={{paddingHorizontal: 8}}
        nestedScrollEnabled
      >
        <Multiselect
          label="Multiselect"
          placeholder="multiselect"
          name="multiselect"
          options={options}
        />
        <Divider height={10} />
        <Select
          options={options}
          name="select"
          label="Select"
          placeholder="Select"
        />
        <Divider height={10} />
        <Combobox
          name="combobox"
          options={options}
          label="Combobox"
          placeholder="Chose number"
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
        <PasswordInput
          name="password"
          placeholder="Password"
          label="Password"
        />
        <Divider height={10} />
        <Slider name="slider" valueUp={5} max={10} />
        <Divider height={20} />
        <Slider name="rangeSlider" range valueDown={2} valueUp={5} max={10} />
        <Divider height={10} />
        <NumberInput
          name="numberInput"
          label="Number"
          placeholder="Number Input"
        />
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <Button type="submit">Submit</Button>
          <Button type="reset">Reset</Button>
        </View>
      </ScrollView>
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
    select: 'five',
    checkbox: true,
    radio: 'option 2',
    switch: true,
    slider: 6,
    rangeSlider: [5, 8],
    numberInput: 6,
    combobox: 'six',
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
  validationSchema,
};

export const WithOnChangeValidation = Template.bind({});
WithOnChangeValidation.args = {
  onSubmit: (formData: any) => {
    console.log('onSubmit external', formData);
  },
  onReset: (formData: any) => {
    console.log('onReset external', formData);
  },
  onChange: (_, {isFormValid}) => console.log(isFormValid),
  validationSchema,
};

export const ErrorOnSubmit = Template.bind({});
ErrorOnSubmit.args = {
  onSubmit: (formData: any, {setError}) => {
    console.log('onSubmit external', formData);
    setError({email: 'This email is already taken'});
  },
  validationSchema,
};

export const ResetOnSubmit = Template.bind({});
ResetOnSubmit.args = {
  onSubmit: (formData: any, {resetForm}) => {
    console.log('onSubmit external', formData);
    resetForm();
  },
};

export const ExternalControl = ExternalFormControl;

export const DisabledSubmitButton = FormDisabledSubmitButton;
