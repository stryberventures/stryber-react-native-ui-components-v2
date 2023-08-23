import React, {useRef, useState} from 'react';
import {ScrollView, View} from 'react-native';
import * as yup from 'yup';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';

import Input from '../Input';
import PasswordInput from '../PasswordInput';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
import {Platform} from 'react-native';
import Form, {IFormRef} from '.';
import Button from '../Button';
import RadioButton from '../RadioButton';
import Checkbox from '../Checkbox';
import Switch from '../Switch';
import Multiselect, {IMultiselectOption} from '../Multiselect';
import Slider from '../Slider';
import Combobox from '../Combobox';
import Select from '../Select';
import CheckboxGroup from '../CheckboxGroup';

import Divider from '../../storybook/preview/Divider';
import NumberInput from '../NumberInput';
import pkg from './package.json';
import useStyles from './Form.styles.stories';
import {vocab} from '../../storybook/preview/i18n';

export default {
  title: 'Core/Form',
  component: Form,
  decorators: Platform.OS === 'web' ? null : [CenterViewDecorator],
  parameters: {
    pkg,
    controls: {
      exclude: [
        'onSubmit',
        'onReset',
        'onError',
        'onChange',
        'onValidate',
        'onValidateAsync',
        'initialValues',
        'validationSchema',
      ],
    },
  },
} as ComponentMeta<typeof Form>;

const options: IMultiselectOption[] = [
  {label: vocab.components.form.multiSelect.option1, value: 'one'},
  {label: vocab.components.form.multiSelect.option2, value: 'two'},
  {label: vocab.components.form.multiSelect.option3, value: 'three'},
  {label: vocab.components.form.multiSelect.option4, value: 'four'},
  {label: vocab.components.form.multiSelect.option5, value: 'five'},
  {label: vocab.components.form.multiSelect.option6, value: 'six'},
];

const childCheckboxes = [
  {
    label: vocab.components.form.checkboxes.label1,
    name: 'firstField',
  },
  {
    label: vocab.components.form.checkboxes.label2,
    name: 'secondField',
  },
  {
    label: vocab.components.form.checkboxes.label3,
    name: 'thirdField',
  },
  {
    label: vocab.components.form.checkboxes.label4,
    name: 'fourthField',
  },
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
  checkboxGroup: yup.array().min(1).required(),
});

const Template: ComponentStory<typeof Form> = ({
  // removed onValidateAsync from props(web storybook error)
  onValidateAsync: _,
  onValidate: _1,
  ...rest
}) => {
  const styles = useStyles();
  return (
    <Form {...rest}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        nestedScrollEnabled
        keyboardShouldPersistTaps="always">
        <Multiselect
          label={vocab.components.form.multiSelect.label}
          placeholder={vocab.components.form.multiSelect.placeholder}
          name="multiselect"
          options={options}
        />
        <Divider height={10} />
        <Select
          options={options}
          name="select"
          label={vocab.components.form.select.label}
          placeholder={vocab.components.form.select.placeholder}
        />
        <Divider height={10} />
        <Combobox
          name="combobox"
          options={options}
          label={vocab.components.form.combobox.label}
          placeholder={vocab.components.form.combobox.placeholder}
        />
        <Divider height={10} />
        <RadioButton
          name="radio"
          value="option 1"
          label={vocab.components.form.radioButton.label1}
        />
        <Divider height={10} />
        <RadioButton
          name="radio"
          value="option 2"
          label={vocab.components.form.radioButton.label2}
        />
        <Divider height={10} />
        <RadioButton
          name="radio"
          value="option 3"
          label={vocab.components.form.radioButton.label3}
        />
        <Divider height={10} />
        <Checkbox name="checkbox" label={vocab.components.form.stayLoggedIn} />
        <Divider height={10} />
        <Switch name="switch" label={vocab.components.form.switch} />
        <Divider height={10} />
        <CheckboxGroup
          label={vocab.components.form.checkboxGroup}
          name="checkboxGroup"
          checkboxes={childCheckboxes}
        />
        <Divider height={10} />
        <Input
          name="email"
          placeholder={vocab.components.form.email}
          label={vocab.components.form.email}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{marginVertical: 20}}
        />
        <Divider height={10} />
        <PasswordInput
          name="password"
          placeholder={vocab.components.form.password}
          label={vocab.components.form.password}
        />
        <Divider height={10} />
        <Slider name="slider" value={5} max={10} />
        <Divider height={20} />
        <Slider name="rangeSlider" value={[2, 5]} max={10} />
        <Divider height={10} />
        <NumberInput
          name="numberInput"
          label={vocab.components.form.number}
          placeholder={vocab.components.form.numberInput}
        />
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Button type="submit">{vocab.components.form.submit}</Button>
          <Button type="reset">{vocab.components.form.reset}</Button>
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
    checkboxGroup: ['secondField', 'firstField'],
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
  onChange: (_, {isValid}) => console.log(isValid),
  validationSchema,
};

export const ErrorOnSubmit = Template.bind({});
ErrorOnSubmit.args = {
  onSubmit: (formData: any, {setErrors}) => {
    console.log('onSubmit external', formData);
    setErrors({email: vocab.components.form.takenEmailError});
  },
  validationSchema,
};

export const ResetOnSubmit = Template.bind({});
ResetOnSubmit.args = {
  onSubmit: (formData: any, {reset}) => {
    console.log('onSubmit external', formData);
    reset();
  },
};

export const ExternalControl = () => {
  const formRef = useRef<IFormRef>(null);
  const [currentFormState, updateFormState]: [any, any] = useState({});
  const styles = useStyles();

  const handleSetError = () => {
    formRef.current!.setErrors({email: vocab.components.form.takenEmailError});
  };

  const handleResetForm = () => {
    formRef.current!.reset();
  };

  return (
    <Form
      ref={formRef}
      onSubmit={(formData: any) => console.log('onSubmit external', formData)}
      onChange={(formData: any) => {
        console.log('onChange external', formData);
        updateFormState(formData);
      }}
      onError={(errorData: any, formData: any) =>
        console.log('onError external', errorData, formData)
      }
      validationSchema={yup.object({
        email: yup.string().email().required(),
        password: yup.string().required(),
      })}>
      <Input
        name="email"
        placeholder={vocab.components.form.email}
        label={vocab.components.form.email}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{marginBottom: 20}}
      />
      {!!currentFormState.email && (
        <Input
          name="password"
          placeholder={vocab.components.form.password}
          label={vocab.components.form.password}
        />
      )}
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Button type="submit">{vocab.components.form.login}</Button>
        <Button type="reset">{vocab.components.form.reset}</Button>
      </View>
      <View style={styles.buttonWrapper}>
        <Button onPress={handleSetError}>
          {vocab.components.form.setExternalError}
        </Button>
        <Button onPress={handleResetForm}>
          {vocab.components.form.resetExternally}
        </Button>
      </View>
    </Form>
  );
};

export const DisabledSubmitButton = () => {
  const [disabled, setDisabled] = useState(true);
  return (
    <Form
      onSubmit={(formData: any) => {
        console.log('onSubmit: ', formData);
      }}
      onChange={(formData: any, {isValid}) => {
        console.log('onChange: ', formData);
        console.log('isFormValid: ', isValid);
        setDisabled(!isValid);
      }}
      onError={(errorData: any, formData: any) =>
        console.log('onError: ', errorData, formData)
      }
      validationSchema={yup.object({
        email: yup.string().email().required(),
        password: yup.string().required(),
      })}>
      <Input
        name="email"
        placeholder={vocab.components.form.email}
        label={vocab.components.form.email}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{marginBottom: 20}}
      />
      <Input
        name="password"
        placeholder={vocab.components.form.password}
        label={vocab.components.form.password}
      />
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Button type="submit" disabled={disabled}>
          {vocab.components.form.login}
        </Button>
        <Button type="reset">{vocab.components.form.reset}</Button>
      </View>
    </Form>
  );
};
