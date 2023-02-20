import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import useStyles from './styles';
import {
  TextInput,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native';
import {useFormContext} from '../Form';
import LabelOutsideInputLayout from './LabelOutsideInputLayout';
import FloatingLabelInputLayout from './FloatingLabelInputLayout';
import {useTheme} from '../Theme';
import Text from '../Text';
import {applyDigitMask} from './utils';

export interface IInputProps extends TextInputProps {
  name?: string;
  label?: string;
  variant?: 'floatingLabel' | 'labelOutside';
  clearFormValueOnUnmount?: boolean;
  hint?: string;
  error?: string | boolean;
  style?: StyleProp<ViewStyle>;
  inputWrapperStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  hintStyle?: StyleProp<TextStyle>;
  errorStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  controlled?: boolean;
  rightContent?: React.ReactNode;
  leftContent?: React.ReactNode;
  color?: 'primary' | 'secondary';
  mask?: string;
  prefix?: string;
  prefixStyle?: StyleProp<TextStyle>;
  showLength?: boolean;
}

const Input = forwardRef<TextInput, IInputProps>(
  (
    {
      name = 'input',
      variant = 'labelOutside',
      onChangeText,
      onFocus,
      onBlur,
      clearFormValueOnUnmount,
      error,
      value = '',
      label,
      hint,
      style,
      inputWrapperStyle,
      inputStyle,
      hintStyle,
      errorStyle,
      disabled,
      controlled,
      maxLength,
      rightContent,
      leftContent,
      color,
      mask,
      prefix,
      prefixStyle,
      showLength,
      placeholder,
      ...rest
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = React.createRef<TextInput>();
    const {theme} = useTheme();

    const styles = useStyles();

    const handleFocus = () => inputRef.current!.focus();

    useImperativeHandle(ref, () => inputRef.current as TextInput);

    const {
      fieldError,
      fieldValue,
      unsetFormValue,
      updateFormValue,
      updateFormTouched,
    } = useFormContext(name);

    const initValue = fieldValue || value;
    const errorMessage = fieldError || error;
    const [internalValue, setInternalValue] = React.useState<string>(
      mask && initValue ? applyDigitMask(initValue, mask) : initValue,
    );

    const getLayoutComponent = () => {
      switch (variant) {
        case 'floatingLabel':
          return FloatingLabelInputLayout;
        case 'labelOutside':
          return LabelOutsideInputLayout;
        default:
          return FloatingLabelInputLayout;
      }
    };

    /** Wrappers to merge form and props methods */
    const onChangeTextWrapper = (text: string) => {
      let nextValue = text;

      setInternalValue(prevValue => {
        if (mask) {
          nextValue =
            prevValue.length >= text.length ? text : applyDigitMask(text, mask);
        }
        return nextValue;
      });

      updateFormValue(name, nextValue);
      onChangeText && onChangeText(nextValue);
    };
    const onFocusWrapper = (
      e: NativeSyntheticEvent<TextInputFocusEventData>,
    ) => {
      setIsFocused(true);
      onFocus && onFocus(e);
    };
    const onBlurWrapper = (
      e: NativeSyntheticEvent<TextInputFocusEventData>,
    ) => {
      setIsFocused(false);
      updateFormTouched(name, true);
      onBlur && onBlur(e);
    };

    useEffect(() => {
      updateFormValue(name, internalValue, true);
      return () => {
        clearFormValueOnUnmount && unsetFormValue(name);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const LayoutComponent = getLayoutComponent();

    return (
      <LayoutComponent
        style={style}
        label={label}
        isFocused={isFocused}
        onPress={handleFocus}
        error={errorMessage}
        inputWrapperStyle={inputWrapperStyle}
        disabled={disabled}
        hint={hint}
        maxValueLength={maxLength}
        showLength={showLength}
        currentValueLength={controlled ? value?.length : internalValue?.length}
        rightContent={rightContent}
        color={color}
        hintStyle={hintStyle}
        errorStyle={errorStyle}
        isEmpty={controlled ? !value : !internalValue}
        leftContent={leftContent}
      >
        <View style={styles.inputContainer}>
          {prefix && (
            <Text variant="components1" style={[styles.prefix, prefixStyle]}>
              {prefix}
            </Text>
          )}
          <TextInput
            style={[styles.input, disabled && styles.disabledInput, inputStyle]}
            value={controlled ? value : internalValue}
            onBlur={onBlurWrapper}
            onChangeText={onChangeTextWrapper}
            onFocus={onFocusWrapper}
            placeholderTextColor={
              disabled ? theme.colors.text.disabled : theme.colors.text.tint
            }
            placeholder={
              variant === 'floatingLabel' && !isFocused ? '' : placeholder
            }
            ref={inputRef}
            maxLength={mask?.length || maxLength}
            editable={!disabled}
            {...rest}
          />
        </View>
      </LayoutComponent>
    );
  },
);

export default Input;
