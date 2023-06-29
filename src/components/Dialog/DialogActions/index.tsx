import React from 'react';
import useStyles from './styles';
import {View, ViewProps} from 'react-native';

interface IDialogActions extends ViewProps {
  children: React.ReactElement | React.ReactElement[];
  shrunk?: boolean;
}

const DialogActions: React.FC<IDialogActions> = ({
  children,
  style,
  shrunk = false,
  ...rest
}) => {
  const styles = useStyles();
  const childElements = Array.isArray(children) ? children : [children];
  return (
    <View style={[styles.actionsWrapper, style]} {...rest}>
      {childElements.map((child, index) => (
        <View
          key={index}
          style={[styles.buttonWrapper, shrunk && styles.buttonWrapperShrunk]}
        >
          {child}
        </View>
      ))}
    </View>
  );
};

export default DialogActions;
