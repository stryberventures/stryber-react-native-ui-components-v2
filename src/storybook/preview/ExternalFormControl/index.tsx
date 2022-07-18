import React, {useRef, useState} from 'react';
import {View} from 'react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Form, {IFormRef} from '../../../components/Form';
import * as yup from 'yup';

const ExternalFormControl = () => {
  const formRef = useRef<IFormRef>(null);
  const [currentFormState, updateFormState]: [any, any] = useState({});

  const handleSetError = () => {
    formRef.current!.setErrors({email: 'This email is already taken'});
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
      })}
    >
      <Input
        name="email"
        placeholder="Email"
        label="Email"
        // eslint-disable-next-line react-native/no-inline-styles
        style={{marginBottom: 20}}
      />
      {!!currentFormState.email && (
        <Input name="password" placeholder="Password" label="Password" />
      )}
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
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <Button onPress={handleSetError}>Set extern error</Button>
        <Button onPress={handleResetForm}>Reset externally</Button>
      </View>
    </Form>
  );
};

export default ExternalFormControl;
