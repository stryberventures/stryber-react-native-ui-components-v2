import {replacePaths} from '../../../../storybook/utils';

const code = `
import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import * as yup from 'yup';
import {createUseStyles} from '../../../components/Theme';
import Text from '../../../components/Text';
import Input from '../../../components/Input';
import Form from '../../../components/Form';
import Button from '../../../components/Button';
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
  sendCodeButton: {
    marginTop: theme.spacing['32'],
  },
  nextButton: {
    marginVertical: theme.spacing['16'],
  },
  formView: {
    flexGrow: 1,
  },
  formContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  errorStyles: {
    position: 'absolute',
    width: '100%',
  },
}));

const validationSchema = yup.object().shape({
  code: yup
    .string()
    .length(6, 'Code must have 6 digits')
    .required('Code is required'),
});

const HOURS_VALID = 24;
const RESEND_CODE_IN_SECONDS = 30;

const SignUpEmailVerification: React.FC = ({}) => {
  const [disabledSubmit, setDisabledSubmit] = useState(true);
  const [disabledResendCode, setDisabledResendCode] = useState(false);
  const [resendCodeIn, setResendCodeIn] = useState<number>(0);
  const styles = useStyles();

  const requestCode = () => {
    setDisabledResendCode(true);
    setResendCodeIn(RESEND_CODE_IN_SECONDS);
  };

  const updateResendCodeIn = () => {
    setResendCodeIn(prevState => prevState - 1);
  };

  useEffect(() => {
    let interval: NodeJS.Timer | undefined;
    if (disabledResendCode) {
      interval = setInterval(updateResendCodeIn, 1000);
    }
    if (!!interval && !disabledResendCode) {
      clearInterval(interval);
    }
    return () => {
      !!interval && clearInterval(interval);
    };
  }, [disabledResendCode]);

  useEffect(() => {
    if (resendCodeIn === 0) {
      setDisabledResendCode(false);
    }
  }, [resendCodeIn]);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.viewContainer}>
        <View style={styles.logoWrapper}>
          <DemoLogo />
        </View>
        <Text variant="h4" weight="bold" style={styles.title}>
          Email verification
        </Text>
        <Text variant="body2" color="secondary" style={styles.description}>
          {\`Please enter the 6-digit verification code that was sent to some@mail.com. The code is valid for \${HOURS_VALID} hours.\`}
        </Text>
        <View style={styles.formView}>
          <Form
            validationSchema={validationSchema}
            onChange={(_, {isValid}) => setDisabledSubmit(!isValid)}
            onSubmit={values => console.log(values)}
          >
            <View style={styles.formContent}>
              <View>
                <Input
                  name="code"
                  label="Insert Verification Code"
                  maxLength={6}
                  mask="XXXXXX"
                  errorStyle={styles.errorStyles}
                />
              </View>
              <View>
                <Button
                  variant="ghost"
                  shape="circle"
                  disabled={disabledResendCode}
                  onPress={requestCode}
                  style={styles.sendCodeButton}
                >
                  {\`Send code again \${resendCodeIn ? \`in \${resendCodeIn} seconds\` : ''}\`}
                </Button>
                <Button
                  shape="circle"
                  style={styles.nextButton}
                  disabled={disabledSubmit}
                >
                  Next
                </Button>
              </View>
            </View>
          </Form>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpEmailVerification;

`;

export default replacePaths(code);
