import React, {useEffect, useState} from 'react';
import useStyles from './styles';
import {
  TextInput,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {useFormContext} from '../Form';
import BaseInputLayout from './BaseInputLayout';
import {useTheme} from '../Theme';

export interface IInputProps extends TextInputProps {
  name?: string;
  label?: string;
  clearFormValueOnUnmount?: boolean;
  hint?: string;
  error?: string;
  style?: StyleProp<ViewStyle>;
  inputWrapperStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  controlled?: boolean;
}

const Input: React.FC<IInputProps> = ({
  name = 'unnamed',
  onChange,
  onFocus,
  onBlur,
  clearFormValueOnUnmount,
  error,
  value,
  label,
  hint,
  style,
  inputWrapperStyle,
  inputStyle,
  disabled,
  controlled,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = React.createRef<TextInput>();
  const {theme} = useTheme();

  const styles = useStyles();

  const handleFocus = () => inputRef.current!.focus();

  /** Getting values from Form context (if the field is wrapped inside a form */
  const {
    fieldError,
    fieldValue,
    unsetFormValue,
    updateFormValue,
    updateFormTouched,
  } = useFormContext(name);

  /** Getting error message from form errors */
  const errorMessage = fieldError || error;

  /** Setting the internal value of the field from form initial values or from value provided to the field */
  const [internalValue, setInternalValue] = useState(fieldValue || value);

  /** Wrappers to merge form and props methods */
  const onChangeWrapper = (
    e: NativeSyntheticEvent<TextInputFocusEventData>,
  ) => {
    const {text: targetValue} = e.nativeEvent;
    /** Internal value update */
    setInternalValue(() => targetValue);
    /** Passthrough to form context */
    updateFormValue(name, targetValue);
    /** Independent callback */
    onChange && onChange(e);
  };
  const onFocusWrapper = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true);
    /** Independent callback */
    onFocus && onFocus(e);
  };
  const onBlurWrapper = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    /** Passthrough to form context */
    updateFormTouched(name, true);
    /** Independent callback */
    onBlur && onBlur(e);
  };

  /** On mount/unmount logic */
  useEffect(() => {
    /** On mount */
    /** Update form with internal value on mount */
    updateFormValue(name, internalValue, true);
    return () => {
      /** On unmount */
      /** Clear Form value if needed */
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
    >
      <TextInput
        style={[styles.input, disabled && styles.disabledInput, inputStyle]}
        value={controlled ? value : internalValue}
        onBlur={onBlurWrapper}
        onChange={onChangeWrapper}
        onFocus={onFocusWrapper}
        placeholderTextColor={disabled ? theme.text.disabled : theme.text.hint}
        ref={inputRef}
        editable={!disabled}
        {...rest}
      />
    </BaseInputLayout>
  );
};

export default Input;
