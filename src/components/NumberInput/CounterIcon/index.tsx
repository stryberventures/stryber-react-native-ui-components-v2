import React from 'react';
import useStyles from './styles';
import {Pressable, PressableProps} from 'react-native';
import {CountIcon} from '../../Icons';

export interface ICounterIconProps extends PressableProps {
  variant?: 'plus' | 'minus';
  color?: 'primary' | 'secondary';
}

const CounterIcon: React.FC<ICounterIconProps> = ({
  variant = 'minus',
  color = 'primary',
  ...rest
}) => {
  const styles = useStyles(color);
  return (
    <Pressable
      style={({pressed}) => [
        styles.container,
        pressed && styles.containerPressed,
      ]}
      {...rest}>
      <CountIcon variant={variant} width={16} height={16} />
    </Pressable>
  );
};

export default CounterIcon;
