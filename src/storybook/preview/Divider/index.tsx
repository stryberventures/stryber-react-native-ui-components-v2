import React from 'react';
import useStyles from './styles';
import {View} from 'react-native';

interface IDividerProps {
  height?: number;
}

const Divider: React.FC<IDividerProps> = ({height = 20}) => {
  const styles = useStyles(height);
  return <View style={styles.divider} />;
};

export default Divider;
