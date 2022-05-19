import React, {useState} from 'react';
import useStyles from './styles';
import {
  View,
  Text,
  PressableProps,
  Pressable,
  StyleProp,
  ViewStyle,
} from 'react-native';
import ToggleIcon, {ToggleIconProps} from './ToggleIcon';
import HintMessage from '../HintMessage';
import ErrorMessage from '../ErrorMessage';

export interface IToggleInputProps extends Omit<PressableProps, 'onPress'> {
  label?: string;
  checked?: boolean;
  onChange?: () => void;
  error?: string;
  disabled?: boolean;
  size?: 'medium' | 'small';
  style?: StyleProp<ViewStyle>;
  hint?: string;
  variant: 'radio' | 'checkbox';
  iconVariant?: 'round' | 'check';
  color?: ToggleIconProps['color'];
  pressedStyle?: StyleProp<ViewStyle>;
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
  ...rest
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const styles = useStyles(size);

  const handlePressIn = () => setIsPressed(true);
  const handlePressOut = () => setIsPressed(false);

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onChange}
      disabled={disabled}
      style={({pressed}) => [
        disabled && styles.disabled,
        style,
        pressed && pressedStyle,
      ]}
      {...rest}
    >
      <View style={styles.toggleInputWrapper}>
        <ToggleIcon
          variant={variant}
          checked={checked}
          isPressed={isPressed}
          iconVariant={iconVariant}
          size={size}
          color={color}
        />
        <Text style={styles.toggleInputText}>{label}</Text>
      </View>
      <HintMessage
        style={styles.textMargin}
        message={hint}
        disabled={disabled}
      />
      <ErrorMessage style={styles.textMargin} error={error} />
    </Pressable>
  );
};

export default ToggleInput;
