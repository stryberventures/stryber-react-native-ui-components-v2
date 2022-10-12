import React from 'react';
import useStyles from './styles';
import {Pressable, PressableProps, ViewStyle} from 'react-native';
import {CloseIcon} from '../../Icons';

interface IClearIconProps extends Omit<PressableProps, 'style'> {
  style?: ViewStyle;
}

const ClearIcon: React.FC<IClearIconProps> = ({style, ...rest}) => {
  const styles = useStyles();
  return (
    <Pressable style={[styles.buttonContainer, style]} {...rest}>
      <CloseIcon />
    </Pressable>
  );
};

export default ClearIcon;
