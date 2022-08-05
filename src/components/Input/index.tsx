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
  Text,
  View,
} from 'react-native';
import {useFormContext} from '../Form';
import BaseInputLayout, {IBaseInputLayoutProps} from './BaseInputLayout';
import {useTheme} from '../Theme';
import {applyDigitMask} from './utils';

export interface IInputProps extends TextInputProps {
  name?: string;
  label?: string;
  clearFormValueOnUnmount?: boolean;
  hint?: string;
  error?: string | boolean;
  style?: StyleProp<ViewStyle>;
  inputWrapperStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  hintStyle?: IBaseInputLayoutProps['hintStyle'];
  errorStyle?: IBaseInputLayoutProps['errorStyle'];
  disabled?: boolean;
  controlled?: boolean;
  rightContent?: IBaseInputLayoutProps['rightContent'];
  color?: IBaseInputLayoutProps['color'];
  mask?: string;
  prefix?: string;
  prefixStyle?: StyleProp<TextStyle>;
  showLength?: boolean;
}

const Input = forwardRef<TextInput, IInputProps>(
  (
    {
      name = 'input',
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
      color,
      mask,
      prefix,
      prefixStyle,
      showLength,
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

    return (
      <BaseInputLayout
        style={style}
        label={label}
        isFocused={isFocused}
        onPress={handleFocus}
        error={errorMessage}
        wrapperStyle={inputWrapperStyle}
        disabled={disabled}
        hint={hint}
        maxValueLength={maxLength}
        showLength={showLength}
        currentValueLength={controlled ? value?.length : internalValue?.length}
        rightContent={rightContent}
        color={color}
        hintStyle={hintStyle}
        errorStyle={errorStyle}
      >
        <View style={styles.inputContainer}>
          {prefix && <Text style={[styles.prefix, prefixStyle]}>{prefix}</Text>}
          <TextInput
            style={[styles.input, disabled && styles.disabledInput, inputStyle]}
            value={controlled ? value : internalValue}
            onBlur={onBlurWrapper}
            onChangeText={onChangeTextWrapper}
            onFocus={onFocusWrapper}
            placeholderTextColor={
              disabled ? theme.text.disabled : theme.text.hint
            }
            ref={inputRef}
            maxLength={mask?.length || maxLength}
            editable={!disabled}
            {...rest}
          />
        </View>
      </BaseInputLayout>
    );
  },
);

export default Input;
