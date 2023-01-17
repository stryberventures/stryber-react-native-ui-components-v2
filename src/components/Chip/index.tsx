import React, {ReactElement} from 'react';
import useStyles from './styles';
import {
  PressableProps,
  Pressable,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Text from '../Text';

export interface IChipProps extends PressableProps {
  children: string | ReactElement;
  color?: 'primary' | 'secondary' | 'success' | 'neutralGray';
  variant?: 'contained' | 'outlined';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Chip: React.FC<IChipProps> = ({
  iconLeft,
  iconRight,
  disabled,
  children,
  color = 'primary',
  variant = 'contained',
  style,
  textStyle,
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
      {children && (
        <Text
          variant="components1"
          weight="medium"
          style={[
            styles.text,
            isOutlined && styles.outlinedText,
            disabled && styles.disabledText,
            textStyle,
          ]}
        >
          {children}
        </Text>
      )}
      {iconRight}
    </Pressable>
  );
};

export default Chip;
