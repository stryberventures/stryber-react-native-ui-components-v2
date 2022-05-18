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

export interface IToggleInputProps extends PressableProps {
  label?: string;
  checked: boolean;
  onChange?: () => void;
  error?: string;
  disabled?: boolean;
  size?: 'medium' | 'small';
  style?: StyleProp<ViewStyle>;
  hint?: string;
  variant: 'radio' | 'checkbox';
  iconVariant: 'round' | 'check';
  color?: ToggleIconProps['color'];
}

const ToggleInput: React.FC<IToggleInputProps> = ({
  checked,
  error,
  onChange,
  disabled,
  size = 'medium',
  onPress: _,
  label,
  hint,
  style,
  variant,
  iconVariant,
  color,
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
      style={[disabled && styles.disabled, style]}
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
