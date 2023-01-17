import React from 'react';
import useStyles from './styles';
import {TextProps} from 'react-native';
import Text from '../Text';

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
      variant="components2"
      style={[styles.hint, disabled && styles.disabledHint, style]}
      {...rest}
    >
      {message}
    </Text>
  );
};

export default HintMessage;
