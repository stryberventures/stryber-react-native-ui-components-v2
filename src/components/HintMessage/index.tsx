import React from 'react';
import useStyles from './styles';
import {Text} from 'react-native';

interface IHintMessageProps {
  disabled?: boolean;
  message?: string;
}

const HintMessage: React.FC<IHintMessageProps> = ({message, disabled}) => {
  const styles = useStyles();

  if (message) {
    return (
      <Text style={[styles.hint, disabled && styles.disabledHint]}>
        {message}
      </Text>
    );
  }

  return null;
};

export default HintMessage;
