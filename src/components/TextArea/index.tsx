import React from 'react';
import useStyles from './styles';
import Input, {IInputProps} from '../Input';

export interface ITextAreaProps
  extends Omit<
    IInputProps,
    'prefix' | 'postfix' | 'prefixStyle' | 'postfixStyle'
  > {}

const TextArea: React.FC<ITextAreaProps> = ({
  variant = 'floatingLabel',
  inputWrapperStyle,
  style,
  ...rest
}) => {
  const styles = useStyles();
  return (
    <Input
      variant={variant}
      style={[variant === 'floatingLabel' && styles.textArea, style]}
      multiline={true}
      numberOfLines={6}
      inputWrapperStyle={[styles.textArea, inputWrapperStyle]}
      inputStyle={styles.input}
      {...rest}
    />
  );
};

export default TextArea;
