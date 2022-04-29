import React, {useState} from 'react';
import {View} from 'react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Form from '../../../components/Form';
import * as yup from 'yup';

interface IExternalFormControlProps {}

const ExternalFormControl: React.FC<IExternalFormControlProps> = () => {
  const [currentFormState, updateFormState]: [any, any] = useState({});

  return (
    <Form
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
    </Form>
  );
};

export default ExternalFormControl;
