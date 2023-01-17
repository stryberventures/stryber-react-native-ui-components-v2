import React from 'react';
import useStyles from './styles';
import {TextProps} from 'react-native';
import Text from '../Text';

interface IErrorMessageProps extends TextProps {
  error: string;
}

const ErrorMessage: React.FC<IErrorMessageProps> = ({
  error,
  style,
  ...rest
}) => {
  const styles = useStyles();

  return (
    <Text variant="components2" style={[styles.error, style]} {...rest}>
      {error}
    </Text>
  );
};

export default ErrorMessage;
