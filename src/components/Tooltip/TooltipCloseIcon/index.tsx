import React from 'react';
import useStyles from './styles';
import {PressableProps, Pressable} from 'react-native';
import {CloseIconDeprecated} from '../../Icons';

interface ITooltipCloseIconProps extends PressableProps {}

const TooltipCloseIcon: React.FC<ITooltipCloseIconProps> = props => {
  const styles = useStyles();
  return (
    <Pressable
      style={({pressed}) => [
        styles.container,
        pressed && styles.pressedContainer,
      ]}
      hitSlop={10}
      {...props}
    >
      <CloseIconDeprecated />
    </Pressable>
  );
};

export default TooltipCloseIcon;
