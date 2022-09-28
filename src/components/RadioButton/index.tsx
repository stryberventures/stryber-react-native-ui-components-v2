import React, {useEffect} from 'react';

import {useFormContext} from '../Form';
import ToggleInput, {IToggleInputProps} from '../ToggleInput';

export interface IRadioButtonProps
  extends Omit<
    IToggleInputProps,
    'onChange' | 'variant' | 'iconVariant' | 'error'
  > {
  name?: string;
  value: any;
  onChange?: (value?: any) => void;
  clearFormValueOnUnmount?: boolean;
}

const RadioButton: React.FC<IRadioButtonProps> = ({
  value,
  name = 'unnamed',
  disabled,
  hint,
  label,
  size = 'medium',
  checked,
  onChange,
  clearFormValueOnUnmount,
  reverse,
  fullWidth,
  ...rest
}) => {
  const {
    fieldValue,
    updateFormValue,
    unsetFormValue,
    updateFormTouched,
  } = useFormContext(name);

  const checkedValue = fieldValue === value;

  const onChangeWrapper = () => {
    updateFormValue(name, value);
    onChange && onChange(value);
    updateFormTouched(name, true);
  };

  useEffect(() => {
    if (checked) {
      updateFormValue(name, value, true);
    }
    if (!fieldValue && !checked) {
      updateFormValue(name, undefined, true);
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
      iconVariant="round"
      onChange={onChangeWrapper}
      disabled={disabled}
      size={size}
      hint={hint}
      reverse={reverse}
      fullWidth={fullWidth}
      {...rest}
    />
  );
};

export default RadioButton;
