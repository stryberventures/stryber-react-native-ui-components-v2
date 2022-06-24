import React from 'react';
import useStyles from './styles';
import {Pressable, PressableProps} from 'react-native';

interface ICounterIconProps extends PressableProps {}

const CounterIcon: React.FC<ICounterIconProps> = ({children, ...rest}) => {
  const styles = useStyles();
  return (
    <Pressable
      style={({pressed}) => [
        styles.container,
        pressed && styles.containerPressed,
      ]}
      {...rest}
    >
      {children}
    </Pressable>
  );
};

export default CounterIcon;
