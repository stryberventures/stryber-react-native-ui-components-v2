import React from 'react';
import useStyles from './styles';
import Input, {IInputProps} from '../Input';

export interface ITextAreaProps extends IInputProps {}

const TextArea: React.FC<ITextAreaProps> = ({inputWrapperStyle, ...rest}) => {
  const styles = useStyles();
  return (
    <Input
      multiline={true}
      numberOfLines={6}
      inputWrapperStyle={[styles.textArea, inputWrapperStyle]}
      {...rest}
    />
  );
};

export default TextArea;
