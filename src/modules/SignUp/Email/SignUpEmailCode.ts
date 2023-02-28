import {replacePaths} from '../../../storybook/utils';

const code = `
import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import * as yup from 'yup';
import {createUseStyles} from '../../../components/Theme';
import Text from '../../../components/Text';
import Input from '../../../components/Input';
import PasswordInput from '../../../components/PasswordInput';
import Form from '../../../components/Form';
import Button from '../../../components/Button';
import DemoLogo from '../../../storybook/preview/DemoLogo';

const useStyles = createUseStyles(theme => ({
  container: {
    width: '100%',
    padding: theme.spacing['32'],
  },
  logoWrapper: {
    alignItems: 'center',
    marginVertical: theme.spacing['32'],
  },
  title: {
    marginBottom: theme.spacing['16'],
  },
  description: {
    marginBottom: theme.spacing['32'],
  },
  input: {
    marginTop: theme.spacing['40'],
  },
  button: {
    marginTop: theme.spacing['80'],
    width: 160,
    alignSelf: 'center',
  },
}));

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  repeatPassword: yup.string().oneOf([yup.ref('password')]),
});

const SignUpEmail: React.FC = ({}) => {
  const [disabled, setDisabled] = useState(true);

  const styles = useStyles();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <View style={styles.logoWrapper}>
          <DemoLogo />
        </View>
        <Text variant="body2" weight="semiBold" style={styles.title}>
          Add Account Details
        </Text>
        <Text variant="body2" color="secondary" style={styles.description}>
          Add your email and create a secure password, following the criteria:
        </Text>
        <Form
          validationSchema={validationSchema}
          onChange={(_, {isValid}) => setDisabled(!isValid)}
          onSubmit={values => console.log(values)}
        >
          <Input
            name="email"
            label="Email"
            placeholder="Type your Email"
            autoComplete="email"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <PasswordInput
            name="password"
            label="Create Password"
            placeholder="Create Password"
            autoComplete="password-new"
            textContentType="newPassword"
            hint="The password should have 8 characters, lower and upper case, numbers and special characters."
            style={styles.input}
          />
          <PasswordInput
            name="repeatPassword"
            label="Repeat Password"
            placeholder="Repeat Password"
            autoComplete="password-new"
            textContentType="newPassword"
            style={styles.input}
          />
          <Button
            type="submit"
            shape="circle"
            style={styles.button}
            disabled={disabled}
          >
            Create Account
          </Button>
        </Form>
      </View>
    </ScrollView>
  );
};

export default SignUpEmail;

`;

export default replacePaths(code);
