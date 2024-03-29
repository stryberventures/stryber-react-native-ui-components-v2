import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import * as yup from 'yup';
import {createUseStyles} from '../../../../components/Theme';
import Text from '../../../../components/Text';
import Input from '../../../../components/Input';
import TextLink from '../../../../components/TextLink';
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
  submitButton: {
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
  newUser: {
    marginTop: theme.spacing['40'],
    marginBottom: theme.spacing['8'],
    alignSelf: 'center',
  },
  hintsStyles: {
    position: 'absolute',
    width: '100%',
  },
}));

const validationSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .min(12, vocab.modules.auth.forgotPassword.invalidNumber)
    .required(),
});

const ForgotPasswordPhone: React.FC = ({}) => {
  const [disabled, setDisabled] = useState(true);

  const styles = useStyles();
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.viewContainer}>
        <View style={styles.logoWrapper}>
          <DemoLogo />
        </View>
        <Text variant="h4" weight="bold" style={styles.title}>
          {vocab.modules.auth.forgotPassword.resetPassword}
        </Text>
        <Text variant="body2" color="secondary" style={styles.description}>
          {vocab.modules.auth.forgotPassword.phoneNumberDesc}
        </Text>
        <View style={styles.formView}>
          <Form
            validationSchema={validationSchema}
            onChange={(_, {isValid}) => setDisabled(!isValid)}
            onSubmit={values => console.log(values)}>
            <View style={styles.formContent}>
              <View>
                <Input
                  name="phoneNumber"
                  label={vocab.modules.auth.forgotPassword.phoneNumber}
                  prefix="+49 "
                  placeholder="000 00000000"
                  mask="XXX XXXXXXXX"
                  autoComplete="tel"
                  keyboardType="phone-pad"
                  textContentType="telephoneNumber"
                  errorStyle={styles.hintsStyles}
                  hintStyle={styles.hintsStyles}
                />
              </View>
              <View>
                <Button
                  type="submit"
                  shape="circle"
                  style={styles.submitButton}
                  disabled={disabled}>
                  {vocab.modules.auth.forgotPassword.sendPassword}
                </Button>
                <Button
                  shape="circle"
                  variant="ghost"
                  style={styles.loginButton}>
                  {vocab.modules.auth.forgotPassword.login}
                </Button>
                <TextLink style={styles.newUser}>
                  {vocab.modules.auth.forgotPassword.newUserRegister}
                </TextLink>
              </View>
            </View>
          </Form>
        </View>
      </View>
    </ScrollView>
  );
};

export default ForgotPasswordPhone;
