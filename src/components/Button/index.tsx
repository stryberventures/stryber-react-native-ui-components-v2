import * as React from 'react';
import {
  Pressable,
  PressableProps,
  ViewStyle,
  TextStyle,
  StyleProp,
  GestureResponderEvent,
} from 'react-native';
import {useStyles} from './styles';
import {useFormContext} from '../Form';
import Text from '../Text';
import {useTheme} from '../Theme';

export type TButtonSize = 'mini' | 'small' | 'medium' | 'large';

export interface IButtonProps extends PressableProps {
  size?: TButtonSize;
  shape?: 'flat' | 'round' | 'circle';
  variant?: 'contained' | 'outlined' | 'ghost';
  color?: 'primary' | 'secondary' | 'error';
  type?: 'submit' | 'reset';
  disabled?: boolean;
  iconLeft?: React.FC<any>;
  iconRight?: React.FC<any>;
  icon?: React.FC<any>;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  children?: React.ReactNode;
}

const getIconSize = (size: TButtonSize): number => {
  switch (size) {
    case 'small':
      return 24;
    case 'mini':
      return 16;
    default:
      return 24;
  }
};

const Button: React.FC<IButtonProps> = ({
  style,
  children,
  iconLeft: IconLeft,
  iconRight: IconRight,
  icon: Icon,
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
  const {theme} = useTheme();

  const iconSizeProps = {
    width: getIconSize(size),
    height: getIconSize(size),
  };

  const getIconColor = (isPressed: boolean) => {
    switch (variant) {
      case 'contained':
        return theme.colors.contrast.white;
      case 'outlined':
      case 'ghost':
        return disabled
          ? theme.colors.neutralGray.light200
          : isPressed
          ? theme.colors[color].dark600
          : theme.colors[color].main500;
      default:
        return theme.colors.contrast.white;
    }
  };

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
        disabled && styles.buttonDisabled,
        Icon && styles.icon,
        style,
      ]}
      disabled={disabled}
      onPress={handlePress}
      {...rest}>
      {({pressed}) => (
        <>
          {Icon && <Icon {...iconSizeProps} fill={getIconColor(pressed)} />}
          {IconLeft && (
            <IconLeft
              {...iconSizeProps}
              fill={getIconColor(pressed)}
              style={styles.leftIcon}
            />
          )}
          <Text
            variant={size === 'mini' ? 'buttonLabelMini' : 'buttonLabelLarge'}
            style={[
              styles.text,
              pressed && styles.textPressed,
              disabled && styles.textDisabled,
              textStyle,
            ]}>
            {children}
          </Text>
          {IconRight && (
            <IconRight
              {...iconSizeProps}
              fill={getIconColor(pressed)}
              style={styles.rightIcon}
            />
          )}
        </>
      )}
    </Pressable>
  );
};

export default Button;
