import React, {useState} from 'react';
import {View} from 'react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Form from '../../../components/Form';
import * as yup from 'yup';

const FormDisabledSubmitButton = () => {
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
      })}
    >
      <Input
        name="email"
        placeholder="Email"
        label="Email"
        // eslint-disable-next-line react-native/no-inline-styles
        style={{marginBottom: 20}}
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
        <Button type="submit" disabled={disabled}>
          Login
        </Button>
        <Button type="reset">Reset</Button>
      </View>
    </Form>
  );
};

export default FormDisabledSubmitButton;
