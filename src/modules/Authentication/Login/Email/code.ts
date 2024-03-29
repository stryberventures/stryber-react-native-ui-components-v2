import {replacePaths} from '../../../../storybook/utils';

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
  scrollContainer: {
    minHeight: '100%',
    paddingHorizontal: theme.spacing['24'],
  },
  viewContainer: {
    minHeight: '100%',
  },
  logoWrapper: {
    alignItems: 'center',
    marginTop: theme.spacing['48'],
    marginBottom: theme.spacing['64'],
  },
  title: {
    marginBottom: theme.spacing['32'],
  },
  inputPassword: {
    marginTop: theme.spacing['48'],
  },
  button: {
    marginTop: theme.spacing['48'],
  },
  checkbox: {
    marginTop: theme.spacing['48'],
  },
  forgotPassword: {
    marginTop: theme.spacing['16'],
    alignSelf: 'center',
  },
  newUser: {
    marginTop: theme.spacing['48'],
    marginBottom: theme.spacing['8'],
    alignSelf: 'center',
  },
  hintsStyles: {
    position: 'absolute',
    width: '100%',
  },
  formView: {
    flexGrow: 1,
  },
  formContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
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
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.viewContainer}>
        <View style={styles.logoWrapper}>
          <DemoLogo />
        </View>
        <Text variant="h4" weight="bold" style={styles.title}>
          Account Login
        </Text>
        <View style={styles.formView}>
          <Form
            validationSchema={validationSchema}
            onChange={(_, {isValid}) => setDisabled(!isValid)}
            onSubmit={values => console.log(values)}
          >
            <View style={styles.formContent}>
              <View>
                <Input
                  name="email"
                  label="Email"
                  placeholder="olivia@example.com"
                  autoComplete="email"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  errorStyle={styles.hintsStyles}
                  hintStyle={styles.hintsStyles}
                />
                <PasswordInput
                  name="password"
                  label="Password"
                  placeholder="Insert your password"
                  autoComplete="password"
                  textContentType="password"
                  style={styles.inputPassword}
                  errorStyle={styles.hintsStyles}
                  hintStyle={styles.hintsStyles}
                />
                <Checkbox
                  name="remember"
                  label="Remember me"
                  style={styles.checkbox}
                />
              </View>
              <View>
                <Button
                  type="submit"
                  shape="circle"
                  style={styles.button}
                  disabled={disabled}
                >
                  Login
                </Button>
                <TextLink style={styles.forgotPassword}>
                  Forgot Password?
                </TextLink>
                <TextLink style={styles.newUser}>
                  New user? Register here
                </TextLink>
              </View>
            </View>
          </Form>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginEmail;

`;

export default replacePaths(code);
