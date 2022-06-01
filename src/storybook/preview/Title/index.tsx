import React from 'react';
import useStyles from './styles';
import {Text} from 'react-native';

interface ITitleProps {}

const Title: React.FC<ITitleProps> = ({children}) => {
  const styles = useStyles();
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;
