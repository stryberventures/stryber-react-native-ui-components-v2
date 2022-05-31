import React from 'react';
import useStyles from './styles';
import {
  Text,
  PressableProps,
  Pressable,
  StyleProp,
  ViewStyle,
} from 'react-native';

export interface IChipProps extends PressableProps {
  color?: 'primary' | 'secondary';
  variant?: 'contained' | 'outlined';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Chip: React.FC<IChipProps> = ({
  iconLeft,
  iconRight,
  disabled,
  children,
  color = 'primary',
  variant = 'contained',
  style,
  ...rest
}) => {
  const isOutlined = variant === 'outlined';
  const styles = useStyles(color);
  return (
    <Pressable
      style={({pressed}) => [
        styles.container,
        pressed && styles.pressed,
        disabled && styles.disabled,
        isOutlined && styles.outlinedContainer,
        isOutlined && pressed && styles.outlinedPressed,
        isOutlined && disabled && styles.outlinedDisabled,
        style,
      ]}
      disabled={disabled}
      {...rest}
    >
      {iconLeft}
      <Text
        style={[
          styles.text,
          isOutlined && styles.outlinedText,
          disabled && styles.disabledText,
        ]}
      >
        {children}
      </Text>
      {iconRight}
    </Pressable>
  );
};

export default Chip;
