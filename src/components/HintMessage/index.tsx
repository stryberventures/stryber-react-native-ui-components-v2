import React from 'react';
import useStyles from './styles';
import {TextProps} from 'react-native';
import Text, {ITextProps} from '../Text';

interface IHintMessageProps extends TextProps {
  disabled?: boolean;
  message: string;
  variant?: ITextProps['variant'];
}

const HintMessage: React.FC<IHintMessageProps> = ({
  message,
  disabled,
  style,
  variant,
  ...rest
}) => {
  const styles = useStyles();

  return (
    <Text
      variant={variant || 'components1'}
      style={[styles.hint, disabled && styles.disabledHint, style]}
      {...rest}
    >
      {message}
    </Text>
  );
};

export default HintMessage;
