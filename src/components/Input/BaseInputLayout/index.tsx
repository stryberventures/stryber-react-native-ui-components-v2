import React, {useState} from 'react';
import useStyles from './styles';
import {
  Text,
  Pressable,
  PressableProps,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';
import HintMessage from '../../HintMessage';
import ErrorMessage from '../../ErrorMessage';

export interface IBaseInputLayoutProps extends PressableProps {
  label?: string;
  isFocused?: boolean;
  style?: StyleProp<ViewStyle>;
  wrapperStyle?: StyleProp<ViewStyle>;
  color?: 'primary' | 'secondary';
  error?: string;
  disabled?: boolean;
  hint?: string;
  rightContent?: React.ReactNode;
  maxValueLength?: number;
  currentValueLength?: number;
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
          {!!error && <View style={styles.errorLine} />}
          <View style={styles.mainContent}>
            <Text style={[styles.label, disabled && styles.disabledLabel]}>
              {label}
            </Text>
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
        {hint && <HintMessage message={hint} disabled={disabled} />}
        {!!maxValueLength && (
          <HintMessage
            message={`${currentValueLength} / ${maxValueLength}`}
            disabled={disabled}
          />
        )}
        {error && <ErrorMessage error={error} />}
      </View>
    );
  },
);

export default BaseInputLayout;
