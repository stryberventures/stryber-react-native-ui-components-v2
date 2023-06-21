import React from 'react';
import useStyles from './styles';
import {
  Pressable,
  PressableProps,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Text from '../../Text';
import HintsLayout from '../HintsLayout';

export interface ILabelOutsideInputLayoutProps extends PressableProps {
  label?: string;
  isFocused?: boolean;
  style?: StyleProp<ViewStyle>;
  inputWrapperStyle?: StyleProp<ViewStyle>;
  hintStyle?: StyleProp<TextStyle>;
  errorStyle?: StyleProp<ViewStyle>;
  color?: 'primary' | 'secondary';
  error?: string;
  disabled?: boolean;
  hint?: string;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  maxValueLength?: number;
  currentValueLength?: number;
  showLength?: boolean;
  size?: 'medium' | 'large';
  unBounded?: boolean;
}

const LabelOutsideInputLayout = React.forwardRef<
  View,
  ILabelOutsideInputLayoutProps
>(
  (
    {
      children,
      label,
      isFocused,
      error,
      style,
      inputWrapperStyle,
      disabled,
      hint,
      color = 'primary',
      leftContent,
      rightContent,
      currentValueLength = 0,
      maxValueLength,
      hintStyle,
      errorStyle,
      showLength,
      size = 'medium',
      unBounded = false,
      ...rest
    },
    ref,
  ) => {
    const styles = useStyles(
      color,
      isFocused,
      !!leftContent,
      !!rightContent,
      size,
      unBounded,
    );
    return (
      <Pressable disabled={disabled} ref={ref} style={style} {...rest}>
        {label && !unBounded && (
          <Text
            variant="components2"
            style={[styles.label, disabled && styles.disabledLabel]}
          >
            {label}
          </Text>
        )}
        <View
          style={[
            styles.input,
            !unBounded && isFocused && styles.inputFocused,
            !unBounded && !!error && styles.error,
            inputWrapperStyle,
          ]}
        >
          {leftContent}
          <View style={styles.mainContent}>{children}</View>
          {rightContent}
        </View>
        {(!!hint || !!showLength || !!error) && (
          <HintsLayout
            showLength={showLength}
            hint={hint}
            hintStyle={hintStyle}
            error={error}
            errorStyle={errorStyle}
            maxValueLength={maxValueLength}
            currentValueLength={currentValueLength}
            disabled={disabled}
          />
        )}
      </Pressable>
    );
  },
);

export default LabelOutsideInputLayout;
