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
  disabled?: boolean;
  controlled?: boolean;
  rightContent?: IBaseInputLayoutProps['rightContent'];
  color?: IBaseInputLayoutProps['color'];
  mask?: string;
  prefix?: string;
}

const Input: React.FC<IInputProps> = ({
  name = 'unnamed',
  value = '',
  onChange,
  onFocus,
  onBlur,
  clearFormValueOnUnmount,
  error,
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
  mask,
  prefix,
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
  const initValue = fieldValue || value;
  const [internalValue, setInternalValue] = React.useState<string>(
    mask && initValue ? applyDigitMask(initValue, mask) : initValue,
  );

  /** Wrappers to merge form and props methods */
  const onChangeWrapper = (
    e: NativeSyntheticEvent<TextInputFocusEventData>,
  ) => {
    const {text: targetValue} = e.nativeEvent;
    let nextValue = targetValue;

    setInternalValue(prevValue => {
      if (mask) {
        nextValue =
          prevValue.length >= targetValue.length
            ? targetValue
            : applyDigitMask(targetValue, mask);
      }
      return nextValue;
    });

    updateFormValue(name, nextValue);
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
      <View style={styles.inputContainer}>
        {prefix && <Text style={styles.prefix}>{prefix}</Text>}
        <TextInput
          style={[styles.input, disabled && styles.disabledInput, inputStyle]}
          value={controlled ? value : internalValue}
          onBlur={onBlurWrapper}
          onChange={onChangeWrapper}
          onFocus={onFocusWrapper}
          placeholderTextColor={
            disabled ? theme.text.disabled : theme.text.hint
          }
          ref={inputRef}
          maxLength={maxLength}
          editable={!disabled}
          {...rest}
        />
      </View>
    </BaseInputLayout>
  );
};

export default Input;
