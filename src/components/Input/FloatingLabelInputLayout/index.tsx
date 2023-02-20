import React, {useEffect, useRef} from 'react';
import useStyles from './styles';
import {
  Pressable,
  PressableProps,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  Animated,
} from 'react-native';
import HintMessage from '../../HintMessage';
import ErrorMessage from '../../ErrorMessage';

export interface IFloatingLabelInputLayoutProps extends PressableProps {
  label?: string;
  isFocused?: boolean;
  isEmpty?: boolean;
  style?: StyleProp<ViewStyle>;
  hintStyle?: StyleProp<TextStyle>;
  errorStyle?: StyleProp<ViewStyle>;
  color?: 'primary' | 'secondary';
  error?: string;
  disabled?: boolean;
  hint?: string;
  rightContent?: React.ReactNode;
  leftContent?: React.ReactNode;
  maxValueLength?: number;
  currentValueLength?: number;
  showLength?: boolean;
}

const FloatingLabelInputLayout = React.forwardRef<
  View,
  IFloatingLabelInputLayoutProps
>(
  (
    {
      children,
      label,
      isFocused,
      isEmpty,
      error,
      style,
      disabled,
      hint,
      color = 'primary',
      rightContent,
      leftContent,
      currentValueLength = 0,
      maxValueLength,
      hintStyle,
      errorStyle,
      showLength,
      ...rest
    },
    ref,
  ) => {
    const labelAnimValue = isFocused ? 1 : !isEmpty ? 1 : 0;
    const labelAnim = useRef(new Animated.Value(labelAnimValue)).current;
    const styles = useStyles(color, isFocused, !!leftContent, !!rightContent);

    const animateLabel = () => {
      Animated.timing(labelAnim, {
        toValue: labelAnimValue,
        duration: 300,
        useNativeDriver: false,
      }).start();
    };

    useEffect(() => {
      animateLabel();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFocused]);

    const translateYLabel = labelAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -12],
    });

    const labelSize = labelAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    });

    return (
      <>
        <Pressable
          style={[
            styles.input,
            isFocused && styles.inputFocused,
            !!error && styles.error,
            style,
          ]}
          disabled={disabled}
          ref={ref}
          {...rest}
        >
          {leftContent}
          <View style={styles.mainContent}>
            <Animated.View style={{opacity: labelAnim}}>
              {children}
            </Animated.View>
            {label && (
              <Animated.View
                style={[
                  styles.animatedLabelContainer,
                  {transform: [{translateY: translateYLabel}]},
                ]}
              >
                <Animated.Text
                  style={[
                    styles.label,
                    {fontSize: labelSize},
                    disabled && styles.disabledLabel,
                  ]}
                >
                  {label}
                </Animated.Text>
              </Animated.View>
            )}
          </View>
          {rightContent}
        </Pressable>
        {!!hint && (
          <HintMessage
            style={[styles.messageMargin, hintStyle]}
            message={hint}
            disabled={disabled}
          />
        )}
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
        {!!error && (
          <ErrorMessage
            error={error}
            style={[styles.messageMargin, errorStyle]}
          />
        )}
      </>
    );
  },
);

export default FloatingLabelInputLayout;
