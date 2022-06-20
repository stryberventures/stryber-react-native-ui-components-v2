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
import BaseInputLayout, {IBaseInputLayoutProps} from './BaseInputLayout';
import {useTheme} from '../Theme';

export interface IInputProps extends TextInputProps {
  name?: string;
  label?: string;
  clearFormValueOnUnmount?: boolean;
  hint?: string;
  error?: string | boolean;
  style?: StyleProp<ViewStyle>;
  inputWrapperStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  controlled?: boolean;
  rightContent?: IBaseInputLayoutProps['rightContent'];
  color?: IBaseInputLayoutProps['color'];
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
  maxLength,
  rightContent,
  color,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = React.createRef<TextInput>();
  const {theme} = useTheme();

  const styles = useStyles();

  const handleFocus = () => inputRef.current!.focus();

  const {
    fieldError,
    fieldValue,
    unsetFormValue,
    updateFormValue,
    updateFormTouched,
  } = useFormContext(name);

  const errorMessage = fieldError || error;

  const [internalValue, setInternalValue] = useState(fieldValue || value);

  /** Wrappers to merge form and props methods */
  const onChangeWrapper = (
    e: NativeSyntheticEvent<TextInputFocusEventData>,
  ) => {
    const {text: targetValue} = e.nativeEvent;
    setInternalValue(targetValue);
    updateFormValue(name, targetValue);
    onChange && onChange(e);
  };
  const onFocusWrapper = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true);
    onFocus && onFocus(e);
  };
  const onBlurWrapper = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
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
      currentValueLength={controlled ? value?.length : internalValue?.length}
      rightContent={rightContent}
      color={color}
    >
      <TextInput
        style={[styles.input, disabled && styles.disabledInput, inputStyle]}
        value={controlled ? value : internalValue}
        onBlur={onBlurWrapper}
        onChange={onChangeWrapper}
        onFocus={onFocusWrapper}
        placeholderTextColor={disabled ? theme.text.disabled : theme.text.hint}
        ref={inputRef}
        maxLength={maxLength}
        editable={!disabled}
        {...rest}
      />
    </BaseInputLayout>
  );
};

export default Input;
