import React from 'react';
import useStyles from './styles';
import {TextProps, View} from 'react-native';
import Text from '../Text';
import {ErrorIcon} from '../Icons';
import {useTheme} from '../Theme';

interface IErrorMessageProps extends TextProps {
  error: string;
}

const ErrorMessage: React.FC<IErrorMessageProps> = ({
  error,
  style,
  ...rest
}) => {
  const {theme} = useTheme();
  const styles = useStyles();

  return (
    <View style={[styles.errorContainer, style]}>
      <ErrorIcon
        variant="filled"
        width={20}
        height={20}
        fill={theme.colors.error.dark600}
        style={styles.errorIcon}
      />
      <Text variant="components2" style={styles.error} {...rest}>
        {error}
      </Text>
    </View>
  );
};

export default ErrorMessage;
