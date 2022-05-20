import React from 'react';
import useStyles from './styles';
import {Text, TextProps} from 'react-native';

interface IHintMessageProps extends TextProps {
  disabled?: boolean;
  message: string;
}

const HintMessage: React.FC<IHintMessageProps> = ({
  message,
  disabled,
  style,
  ...rest
}) => {
  const styles = useStyles();

  return (
    <Text
      style={[styles.hint, disabled && styles.disabledHint, style]}
      {...rest}
    >
      {message}
    </Text>
  );
};

export default HintMessage;
