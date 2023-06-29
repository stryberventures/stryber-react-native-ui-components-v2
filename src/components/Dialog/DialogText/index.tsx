import React from 'react';
import useStyles from './styles';
import Text, {ITextProps} from '../../Text';

interface IDialogText extends ITextProps {}

const DialogText: React.FC<IDialogText> = ({children, style, ...rest}) => {
  const styles = useStyles();
  return (
    <Text style={[styles.dialogText, style]} variant="body3" {...rest}>
      {children}
    </Text>
  );
};

export default DialogText;
