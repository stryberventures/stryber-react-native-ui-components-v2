import React from 'react';
import useStyles from './styles';
import {Text, TextProps} from 'react-native';

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
    <Text style={[styles.error, style]} {...rest}>
      {error}
    </Text>
  );
};

export default ErrorMessage;
