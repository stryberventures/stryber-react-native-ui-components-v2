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
import HintsLayout from '../HintsLayout';

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
    console.log('labelAnimValue', labelAnimValue);
    console.log('isFocused', isFocused);
    console.log('isEmpty', isEmpty);
    const labelAnim = useRef(new Animated.Value(labelAnimValue)).current;
    const styles = useStyles(color, isFocused, !!leftContent, !!rightContent);

    const animateLabel = () => {
      console.log('animate');
      Animated.timing(labelAnim, {
        toValue: labelAnimValue,
        duration: 300,
        useNativeDriver: false,
      }).start();
    };

    useEffect(() => {
      animateLabel();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFocused, isEmpty]);

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
      </>
    );
  },
);

export default FloatingLabelInputLayout;
