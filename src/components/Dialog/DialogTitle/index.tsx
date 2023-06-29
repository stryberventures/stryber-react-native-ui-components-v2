import React from 'react';
import useStyles from './styles';
import Text, {ITextProps} from '../../Text';

interface IDialogTitle extends ITextProps {}

const DialogTitle: React.FC<IDialogTitle> = ({children, style, ...rest}) => {
  const styles = useStyles();
  return (
    <Text
      style={[styles.dialogTitle, style]}
      variant="body1"
      color="headline"
      {...rest}
    >
      {children}
    </Text>
  );
};

export default DialogTitle;
