import {replacePaths} from '../../../../storybook/utils';

const code = `
import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import * as yup from 'yup';
import {createUseStyles} from '../../../components/Theme';
import Text from '../../../components/Text';
import TextLink from '../../../components/TextLink';
import Input from '../../../components/Input';
import Form from '../../../components/Form';
import Button from '../../../components/Button';
import DemoLogo from '../../../storybook/preview/DemoLogo';
import Checkbox from '../../../components/Checkbox';

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
  phoneNumberInput: {
    marginTop: theme.spacing['48'],
  },
  nextButton: {
    marginTop: theme.spacing['16'],
  },
  loginButton: {
    marginTop: theme.spacing['16'],
  },
  checkbox: {
    marginTop: theme.spacing['48'],
  },
  checkboxContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: -theme.spacing['2'],
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

const validationSchema = yup.object().shape({
  phoneNumber: yup.string().min(12, 'Invalid phone number').required(),
  termsAndConditions: yup
    .boolean()
    .oneOf([true], 'Please accept the terms and conditions'),
});

const SignUpPhoneNumber: React.FC = ({}) => {
  const [disabled, setDisabled] = useState(true);

  const styles = useStyles();
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.viewContainer}>
        <View style={styles.logoWrapper}>
          <DemoLogo />
        </View>
        <Text variant="h4" weight="bold" style={styles.title}>
          Sign Up
        </Text>
        <Text variant="body2" color="secondary" style={styles.description}>
          Please insert your phone number in order to start:
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
                  name="phoneNumber"
                  label="Phone Number"
                  prefix="+49 "
                  placeholder="000 00000000"
                  mask="XXX XXXXXXXX"
                  autoComplete="tel"
                  keyboardType="phone-pad"
                  textContentType="telephoneNumber"
                  style={styles.phoneNumberInput}
                  errorStyle={styles.hintsStyles}
                  hintStyle={styles.hintsStyles}
                />
                <Checkbox
                  name="termsAndConditions"
                  style={styles.checkbox}
                  label={
                    <View style={styles.checkboxContent}>
                      <Text variant="body2" color="secondary">
                        I accept the{' '}
                      </Text>
                      <TextLink>Terms and Conditions</TextLink>
                      <Text variant="body2" color="secondary">
                        {' '}
                        and{' '}
                      </Text>
                      <TextLink>Data Policy</TextLink>
                    </View>
                  }
                />
              </View>
              <View>
                <Button
                  style={styles.nextButton}
                  type="submit"
                  shape="circle"
                  disabled={disabled}
                >
                  Next
                </Button>
                <Button
                  shape="circle"
                  variant="ghost"
                  style={styles.loginButton}
                >
                  Login
                </Button>
              </View>
            </View>
          </Form>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpPhoneNumber;

`;

export default replacePaths(code);
