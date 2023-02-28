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
import Checkbox from '../../../components/Checkbox';
import TextLink from '../../../components/TextLink';
import DemoLogo from '../../../storybook/preview/DemoLogo';

const useStyles = createUseStyles(theme => ({
  container: {
    height: '100%',
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
    marginTop: theme.spacing['160'],
    width: 160,
    alignSelf: 'center',
  },
  checkbox: {
    marginVertical: theme.spacing['32'],
  },
  link: {
    marginTop: theme.spacing['16'],
  },
}));

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

const LoginEmail: React.FC = ({}) => {
  const [disabled, setDisabled] = useState(true);

  const styles = useStyles();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Form
        validationSchema={validationSchema}
        onChange={(_, {isValid}) => setDisabled(!isValid)}
        onSubmit={values => console.log(values)}
      >
        <View>
          <View style={styles.logoWrapper}>
            <DemoLogo />
          </View>
          <Text variant="body2" weight="semiBold" style={styles.title}>
            Account Login
          </Text>
          <Input
            name="email"
            label="Email"
            placeholder="olivia@example.com"
            autoComplete="email"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <PasswordInput
            name="password"
            label="Password"
            placeholder="Insert your password"
            autoComplete="password"
            textContentType="password"
            style={styles.input}
          />
          <Checkbox
            name="remember"
            label="Remember me"
            style={styles.checkbox}
          />
          <TextLink>Forgot Password</TextLink>
          <TextLink style={styles.link}>New user? Register</TextLink>
          <Button
            type="submit"
            shape="circle"
            style={styles.button}
            disabled={disabled}
          >
            Create Account
          </Button>
        </View>
      </Form>
    </ScrollView>
  );
};

export default LoginEmail;

`;

export default replacePaths(code);
