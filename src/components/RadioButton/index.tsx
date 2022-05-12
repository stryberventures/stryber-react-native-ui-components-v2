import React, {useEffect} from 'react';
import {PressableProps, StyleProp, ViewStyle} from 'react-native';

import {useFormContext} from '../Form';
import ToggleInput, {IToggleInputProps} from '../ToggleInput';

export interface IRadioButtonProps extends PressableProps {
  name?: string;
  value: any;
  label?: string;
  checked?: boolean;
  onChange?: (value: any) => void;
  error?: string;
  disabled?: boolean;
  iconVariant?: IToggleInputProps['iconVariant'];
  style?: StyleProp<ViewStyle>;
  size?: IToggleInputProps['size'];
  hint?: string;
  clearFormValueOnUnmount?: boolean;
}

const RadioButton: React.FC<IRadioButtonProps> = ({
  value,
  name = 'unnamed',
  iconVariant = 'round',
  disabled,
  hint,
  error,
  label,
  size = 'medium',
  checked,
  onChange,
  clearFormValueOnUnmount,
  ...rest
}) => {
  const {
    fieldValue,
    fieldError,
    updateFormValue,
    unsetFormValue,
    updateFormTouched,
  } = useFormContext(name);

  const checkedValue = fieldValue === value;
  const errorMessage = fieldError || error;

  const onChangeWrapper = () => {
    updateFormValue(name, value);
    onChange && onChange(value);
    updateFormTouched(name, true);
  };

  useEffect(() => {
    if (checked) {
      updateFormValue(name, value, true);
    }
    return () => {
      clearFormValueOnUnmount && unsetFormValue(name);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ToggleInput
      label={label}
      checked={checkedValue}
      variant="radio"
      iconVariant={iconVariant}
      error={errorMessage}
      onChange={onChangeWrapper}
      disabled={disabled}
      size={size}
      hint={hint}
      {...rest}
    />
  );
};

export default RadioButton;
