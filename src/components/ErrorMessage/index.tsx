import React from 'react';
import useStyles from './styles';
import {Text} from 'react-native';

interface IErrorMessageProps {
  error?: string;
}

const ErrorMessage: React.FC<IErrorMessageProps> = ({error}) => {
  const styles = useStyles();

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }
  return null;
};

export default ErrorMessage;
