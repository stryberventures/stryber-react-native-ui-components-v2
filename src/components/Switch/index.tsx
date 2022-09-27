import React from 'react';
import ToggleInput, {IToggleInputProps} from '../ToggleInput';
import {useCheckbox} from '../Checkbox/useCheckbox';

export interface ISwitchProps
  extends Omit<
    IToggleInputProps,
    'onChange' | 'variant' | 'iconVariant' | 'size'
  > {
  name?: string;
  onChange?: (checked?: boolean) => void;
  clearFormValueOnUnmount?: boolean;
  controlled?: boolean;
}

const Switch: React.FC<ISwitchProps> = ({
  name = 'unnamed',
  error,
  onChange,
  checked,
  clearFormValueOnUnmount,
  controlled,
  fullWidth,
  reverse,
  ...rest
}) => {
  // Switch uses the same logic as a Checkbox
  const {internalValue, errorMessage, onChangeWrapper} = useCheckbox({
    name,
    error,
    onChange,
    checked,
    clearFormValueOnUnmount,
  });

  return (
    <ToggleInput
      checked={controlled ? checked : internalValue}
      variant="switch"
      error={errorMessage}
      onChange={onChangeWrapper}
      fullWidth={fullWidth}
      reverse={reverse}
      {...rest}
    />
  );
};

export default Switch;
