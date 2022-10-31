import React from 'react';
import useStyles from './styles';
import {View, ViewProps} from 'react-native';

interface IDialogActions extends ViewProps {}

const DialogActions: React.FC<IDialogActions> = ({
  children,
  style,
  ...rest
}) => {
  const styles = useStyles();
  return (
    <View style={[styles.actionsWrapper, style]} {...rest}>
      {children}
    </View>
  );
};

export default DialogActions;
