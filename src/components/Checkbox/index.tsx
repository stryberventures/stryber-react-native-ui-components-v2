import React, {useEffect, useState} from 'react';
import {useFormContext} from '../Form';
import ToggleInput, {IToggleInputProps} from '../ToggleInput';

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
  const {
    fieldValue,
    fieldError,
    updateFormValue,
    unsetFormValue,
    updateFormTouched,
  } = useFormContext(name);

  const [internalValue, setInternalValue] = useState(fieldValue || checked);
  const errorMessage = fieldError || error;

  const onChangeWrapper = () => {
    setInternalValue(!internalValue);
    updateFormValue(name, !internalValue);
    onChange && onChange(!internalValue);
    updateFormTouched(name, true);
  };

  useEffect(() => {
    updateFormValue(name, internalValue, true);
    return () => {
      clearFormValueOnUnmount && unsetFormValue(name);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
