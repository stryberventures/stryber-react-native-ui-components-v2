import React, {ReactElement, useState} from 'react';
import useStyles from './styles';
import {
  View,
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
import Text from '../Text';

export interface IToggleInputProps extends Omit<PressableProps, 'onPress'> {
  label?: string | ReactElement;
  checked?: boolean;
  indeterminate?: boolean;
  onChange?: () => void;
  error?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  hint?: string;
  variant: 'radio' | 'checkbox' | 'switch';
  iconVariant?: 'round' | 'check';
  color?: ToggleIconProps['color'];
  pressedStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  reverse?: boolean;
  fullWidth?: boolean;
  controlCentered?: boolean;
}

const ToggleInput: React.FC<IToggleInputProps> = ({
  checked,
  indeterminate,
  error,
  onChange,
  disabled,
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
  controlCentered = false,
  ...rest
}) => {
  const styles = useStyles(variant, reverse, controlCentered);
  const [containerHeight, setContainerHeight] = useState(0);

  return (
    <Pressable
      onPress={onChange}
      disabled={disabled}
      hitSlop={3}
      style={({pressed}) => [style, pressed && pressedStyle]}
      {...rest}
    >
      {({pressed}) => (
        <>
          <View
            style={[styles.toggleInputWrapper, fullWidth && styles.fullWidth]}
          >
            <View style={[styles.toggleInput, {height: containerHeight}]}>
              {variant === 'switch' ? (
                <SwitchIcon
                  isPressed={pressed}
                  checked={checked}
                  color={color}
                  disabled={disabled}
                />
              ) : (
                <ToggleIcon
                  variant={variant}
                  checked={checked}
                  isPressed={pressed}
                  iconVariant={iconVariant}
                  color={color}
                  disabled={disabled}
                  indeterminate={indeterminate}
                  error={error}
                />
              )}
            </View>
            <View style={styles.textContainer}>
              {!!label && typeof label === 'string' ? (
                <Text
                  variant="components1"
                  weight="regular"
                  style={[
                    styles.toggleInputText,
                    disabled && styles.disabledText,
                    labelStyle,
                  ]}
                  onLayout={({nativeEvent}) =>
                    setContainerHeight(nativeEvent.layout.height)
                  }
                >
                  {label}
                </Text>
              ) : (
                !!label && label
              )}
              {!!hint && (
                <HintMessage
                  style={styles.hint}
                  message={hint}
                  disabled={disabled}
                  variant="components2"
                />
              )}
            </View>
          </View>
          {!!error && <ErrorMessage style={styles.error} error={error} />}
        </>
      )}
    </Pressable>
  );
};

export default ToggleInput;
