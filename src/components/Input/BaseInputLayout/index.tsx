import React, {useState} from 'react';
import useStyles from './styles';
import {
  Text,
  Pressable,
  PressableProps,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import HintMessage from '../../HintMessage';
import ErrorMessage from '../../ErrorMessage';

export interface IBaseInputLayoutProps extends PressableProps {
  label?: string;
  isFocused?: boolean;
  style?: StyleProp<ViewStyle>;
  hintStyle?: StyleProp<TextStyle>;
  errorStyle?: StyleProp<TextStyle>;
  wrapperStyle?: StyleProp<ViewStyle>;
  color?: 'primary' | 'secondary';
  error?: string;
  disabled?: boolean;
  hint?: string;
  rightContent?: React.ReactNode;
  maxValueLength?: number;
  currentValueLength?: number;
  showLength?: boolean;
}

export interface IInputSize {
  width: number;
  height: number;
}

const BaseInputLayout = React.forwardRef<View, IBaseInputLayoutProps>(
  (
    {
      children,
      label,
      isFocused,
      error,
      style,
      wrapperStyle,
      disabled,
      hint,
      color = 'primary',
      rightContent,
      currentValueLength = 0,
      maxValueLength,
      hintStyle,
      errorStyle,
      showLength,
      ...rest
    },
    ref,
  ) => {
    const [inputSize, setInputSize] = useState<IInputSize>({
      width: 0,
      height: 0,
    });
    const styles = useStyles(inputSize, color);
    return (
      <View style={style}>
        <Pressable
          style={[
            styles.baseInput,
            isFocused && styles.baseInputFocused,
            !!error && styles.error,
            disabled && styles.disabled,
            wrapperStyle,
          ]}
          disabled={disabled}
          onLayout={e => {
            const {layout} = e.nativeEvent;
            setInputSize(layout);
          }}
          ref={ref}
          {...rest}
        >
          <View style={styles.mainContent}>
            {label && (
              <Text style={[styles.label, disabled && styles.disabledLabel]}>
                {label}
              </Text>
            )}
            {children}
          </View>
          {rightContent}
        </Pressable>
        {isFocused && (
          <View
            style={[
              styles.focusedOutline,
              !!error && styles.errorFocusedOutline,
            ]}
          />
        )}
        {!!hint && <HintMessage message={hint} disabled={disabled} />}
        {!!showLength && (
          <HintMessage
            message={
              maxValueLength
                ? `${currentValueLength} / ${maxValueLength}`
                : `${currentValueLength}`
            }
            disabled={disabled}
            style={hintStyle}
          />
        )}
        {!!error && <ErrorMessage error={error} style={errorStyle} />}
      </View>
    );
  },
);

export default BaseInputLayout;
