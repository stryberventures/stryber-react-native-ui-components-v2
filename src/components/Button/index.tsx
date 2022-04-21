import * as React from 'react';
import {
  Pressable,
  PressableProps,
  ViewStyle,
  TextStyle,
  StyleProp,
  Text,
  View,
} from 'react-native';
import {useStyles} from './styles';

export interface IButtonProps extends PressableProps {
  size?: 'mini' | 'small' | 'medium' | 'large';
  shape?: 'flat' | 'round' | 'circle';
  type?: 'contained' | 'outlined';
  color?: 'primary' | 'secondary';
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Button: React.FC<IButtonProps> = ({
  style,
  children,
  leftIcon,
  rightIcon,
  type = 'contained',
  color = 'primary',
  size = 'medium',
  shape = 'round',
  textStyle,
  disabled = false,
  ...rest
}) => {
  const styles = useStyles(color, size, type);

  const renderIcon = (
    position: 'leftIcon' | 'rightIcon',
    icon?: React.ReactNode,
  ) => icon && <View style={styles[position]}>{icon}</View>;

  return (
    <Pressable
      style={({pressed}) => [
        styles.button,
        styles[size],
        styles[shape],
        pressed && styles.buttonPressed,
        disabled && styles.disabled,
        style,
      ]}
      disabled={disabled}
      {...rest}
    >
      {renderIcon('leftIcon', leftIcon)}
      <Text style={[styles.text, textStyle]}>{children}</Text>
      {renderIcon('rightIcon', rightIcon)}
    </Pressable>
  );
};

export default Button;
