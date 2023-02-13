import React from 'react';
import useStyles from './styles';
import {View, ViewProps} from 'react-native';

export interface IDividerProps extends ViewProps {}

const Divider: React.FC<IDividerProps> = ({style, ...rest}) => {
  const styles = useStyles();
  return <View style={[styles.divider, style]} {...rest} />;
};

export default Divider;
