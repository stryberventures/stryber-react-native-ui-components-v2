import React from 'react';
import ToggleInput, {IToggleInputProps} from '../ToggleInput';
import {useCheckbox} from './useCheckbox';

export interface ICheckboxProps
  extends Omit<IToggleInputProps, 'onChange' | 'variant' | 'iconVariant'> {
  name?: string;
  onChange?: (checked?: boolean) => void;
  clearFormValueOnUnmount?: boolean;
  controlled?: boolean;
}

const Checkbox: React.FC<ICheckboxProps> = ({
  checked,
  name = 'unnamed',
  error,
  onChange,
  clearFormValueOnUnmount,
  disabled,
  size = 'medium',
  label,
  hint,
  controlled,
  ...rest
}) => {
  const {internalValue, onChangeWrapper, errorMessage} = useCheckbox({
    name,
    error,
    onChange,
    checked,
    clearFormValueOnUnmount,
  });

  return (
    <ToggleInput
      iconVariant="check"
      variant="checkbox"
      onChange={onChangeWrapper}
      error={errorMessage}
      checked={controlled ? checked : internalValue}
      disabled={disabled}
      size={size}
      label={label}
      hint={hint}
      {...rest}
    />
  );
};

export default Checkbox;
