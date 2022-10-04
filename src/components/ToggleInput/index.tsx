import React, {ReactElement, useState} from 'react';
import useStyles from './styles';
import {
  View,
  Text,
  PressableProps,
  Pressable,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import ToggleIcon, {ToggleIconProps} from './ToggleIcon';
import HintMessage from '../HintMessage';
import ErrorMessage from '../ErrorMessage';
import SwitchIcon from './SwitchIcon';

export interface IToggleInputProps extends Omit<PressableProps, 'onPress'> {
  label?: string | ReactElement;
  checked?: boolean;
  onChange?: () => void;
  error?: string;
  disabled?: boolean;
  size?: 'medium' | 'small';
  style?: StyleProp<ViewStyle>;
  hint?: string;
  variant: 'radio' | 'checkbox' | 'switch';
  iconVariant?: 'round' | 'check';
  color?: ToggleIconProps['color'];
  pressedStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  reverse?: boolean;
  fullWidth?: boolean;
}

const ToggleInput: React.FC<IToggleInputProps> = ({
  checked,
  error,
  onChange,
  disabled,
  size = 'medium',
  label,
  hint,
  style,
  variant,
  iconVariant = 'check',
  color,
  pressedStyle,
  labelStyle,
  reverse,
  fullWidth,
  ...rest
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const styles = useStyles(size, variant, reverse);

  const handlePressIn = () => setIsPressed(true);
  const handlePressOut = () => setIsPressed(false);

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onChange}
      disabled={disabled}
      hitSlop={3}
      style={({pressed}) => [
        disabled && styles.disabled,
        style,
        pressed && pressedStyle,
      ]}
      {...rest}
    >
      <View style={[styles.toggleInputWrapper, fullWidth && styles.fullWidth]}>
        {variant === 'switch' ? (
          <SwitchIcon isPressed={isPressed} checked={checked} color={color} />
        ) : (
          <ToggleIcon
            variant={variant}
            checked={checked}
            isPressed={isPressed}
            iconVariant={iconVariant}
            size={size}
            color={color}
            disabled={disabled}
          />
        )}
        <View style={styles.textContainer}>
          {!!label && typeof label === 'string' ? (
            <Text style={[styles.toggleInputText, labelStyle]}>{label}</Text>
          ) : (
            label
          )}
          {!!hint && (
            <HintMessage
              style={styles.hint}
              message={hint}
              disabled={disabled}
            />
          )}
        </View>
      </View>
      {!!error && variant !== 'radio' && (
        <ErrorMessage style={styles.error} error={error} />
      )}
    </Pressable>
  );
};

export default ToggleInput;
