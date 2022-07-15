import * as React from 'react';
import {
  Pressable,
  PressableProps,
  ViewStyle,
  TextStyle,
  StyleProp,
  Text,
  View,
  GestureResponderEvent,
} from 'react-native';
import {useStyles} from './styles';
import {useFormContext} from '../Form';

export interface IButtonProps extends PressableProps {
  size?: 'mini' | 'small' | 'medium' | 'large';
  shape?: 'flat' | 'round' | 'circle';
  variant?: 'contained' | 'outlined';
  color?: 'primary' | 'secondary';
  type?: 'submit' | 'reset';
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Button: React.FC<IButtonProps> = ({
  style,
  children,
  iconLeft,
  iconRight,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  shape = 'round',
  textStyle,
  disabled = false,
  onPress,
  type,
  ...rest
}) => {
  const {
    formActions: {submit, reset},
  } = useFormContext();
  const styles = useStyles(color, size, variant);

  const renderIcon = (
    position: 'leftIcon' | 'rightIcon',
    icon?: React.ReactNode,
  ) => icon && <View style={styles[position]}>{icon}</View>;

  const handlePress = (e: GestureResponderEvent) => {
    switch (type) {
      case 'submit':
        return submit();
      case 'reset':
        return reset();
      default:
        return onPress && onPress(e);
    }
  };

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
      onPress={handlePress}
      {...rest}
    >
      {renderIcon('leftIcon', iconLeft)}
      <Text style={[styles.text, textStyle]}>{children}</Text>
      {renderIcon('rightIcon', iconRight)}
    </Pressable>
  );
};

export default Button;
