import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import * as yup from 'yup';
import {createUseStyles} from '../../../../components/Theme';
import Text from '../../../../components/Text';
import Input from '../../../../components/Input';
import PasswordInput from '../../../../components/PasswordInput';
import Form from '../../../../components/Form';
import Button from '../../../../components/Button';
import DemoLogo from '../../../../storybook/preview/DemoLogo';
import {vocab} from '../../../../storybook/preview/i18n';

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
    marginBottom: theme.spacing['12'],
  },
  description: {
    marginBottom: theme.spacing['32'],
  },
  inputPassword: {
    marginTop: theme.spacing['48'],
  },
  inputRepeatPassword: {
    marginTop: theme.spacing['96'],
  },
  createAccountButton: {
    marginTop: theme.spacing['48'],
  },
  loginButton: {
    marginTop: theme.spacing['16'],
  },
  formView: {
    flexGrow: 1,
  },
  formContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  hintsStyles: {
    position: 'absolute',
    width: '100%',
  },
}));

const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
const passwordHintMessage = vocab.modules.auth.signup.passwordHintMessage;

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().matches(passwordRegEx, passwordHintMessage).required(),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password')], vocab.modules.auth.signup.passwordDontMatch),
});

const SignUpEmail: React.FC = ({}) => {
  const [disabled, setDisabled] = useState(true);

  const styles = useStyles();
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.viewContainer}>
        <View style={styles.logoWrapper}>
          <DemoLogo />
        </View>
        <Text variant="h4" weight="bold" style={styles.title}>
          {vocab.modules.auth.signup.addAccountDetails}
        </Text>
        <Text variant="body2" color="secondary" style={styles.description}>
          {vocab.modules.auth.signup.addEmail}
        </Text>
        <View style={styles.formView}>
          <Form
            validationSchema={validationSchema}
            onChange={(_, {isValid}) => setDisabled(!isValid)}
            onSubmit={values => console.log(values)}>
            <View style={styles.formContent}>
              <View>
                <Input
                  name="email"
                  label={vocab.modules.auth.signup.email}
                  placeholder={vocab.modules.auth.signup.emailPlaceholder}
                  autoComplete="email"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  hintStyle={styles.hintsStyles}
                  errorStyle={styles.hintsStyles}
                />
                <PasswordInput
                  name="password"
                  label={vocab.modules.auth.signup.createPassword}
                  placeholder={vocab.modules.auth.signup.createPassword}
                  autoComplete="password-new"
                  textContentType="newPassword"
                  hint={passwordHintMessage}
                  hintStyle={styles.hintsStyles}
                  errorStyle={styles.hintsStyles}
                  style={styles.inputPassword}
                />
                <PasswordInput
                  name="repeatPassword"
                  label={vocab.modules.auth.signup.repeatPassword}
                  placeholder={vocab.modules.auth.signup.repeatPassword}
                  autoComplete="password-new"
                  textContentType="newPassword"
                  hintStyle={styles.hintsStyles}
                  errorStyle={styles.hintsStyles}
                  style={styles.inputRepeatPassword}
                />
              </View>
              <View>
                <Button
                  type="submit"
                  shape="circle"
                  style={styles.createAccountButton}
                  disabled={disabled}>
                  {vocab.modules.auth.signup.createAccount}
                </Button>
                <Button
                  shape="circle"
                  variant="ghost"
                  style={styles.loginButton}>
                  {vocab.modules.auth.signup.login}
                </Button>
              </View>
            </View>
          </Form>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpEmail;
