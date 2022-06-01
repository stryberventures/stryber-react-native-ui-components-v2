import React from 'react';
import useStyles from './styles';
import {View} from 'react-native';

interface IDividerProps {}

const Divider: React.FC<IDividerProps> = ({}) => {
  const styles = useStyles();
  return <View style={styles.divider} />;
};

export default Divider;
