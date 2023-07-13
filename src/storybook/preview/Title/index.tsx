import React from 'react';
import useStyles from './styles';
import {Text} from 'react-native';

interface ITitleProps {
  children: React.ReactNode;
}

const Title: React.FC<ITitleProps> = ({children}) => {
  const styles = useStyles();
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;
