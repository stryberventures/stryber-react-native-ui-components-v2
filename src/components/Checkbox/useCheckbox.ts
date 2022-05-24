import {useEffect, useState} from 'react';
import {useFormContext} from '../Form';
import {ICheckboxProps} from './index';

interface IUseCheckbox {
  name: ICheckboxProps['name'];
  error: ICheckboxProps['error'];
  onChange: ICheckboxProps['onChange'];
  checked: ICheckboxProps['checked'];
  clearFormValueOnUnmount: ICheckboxProps['clearFormValueOnUnmount'];
}

export const useCheckbox = ({
  name = 'unnamed',
  error,
  onChange,
  checked,
  clearFormValueOnUnmount,
}: IUseCheckbox) => {
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

  return {internalValue, errorMessage, onChangeWrapper};
};
