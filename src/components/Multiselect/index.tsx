import React, {useEffect, useState} from 'react';
import useStyles from './styles';
import {ScrollView} from 'react-native';
import Dropdown, {IDropdownProps} from '../Dropdown';
import Checkbox from '../Checkbox';
import Form, {useFormContext} from '../Form';

export interface IMultiselectOption {
  label: string;
  value: string | number;
}

export interface IMultiselectProps
  extends Omit<
    IDropdownProps,
    'children' | 'value' | 'onChange' | 'error' | 'variant'
  > {
  name?: string;
  options: IMultiselectOption[];
  selectedOptions?: (number | string)[];
  clearFormValueOnUnmount?: boolean;
  error?: string | boolean;
  onChange?: (selectedOptions?: (number | string)[]) => void;
  onDropdownChange?: IDropdownProps['onChange'];
}

type FormValuesType = {
  [key: string]: boolean;
};

const Multiselect: React.FC<IMultiselectProps> = ({
  name = 'unnamed',
  options,
  dropdownStyle,
  error,
  selectedOptions: initSelectedOptions = [],
  clearFormValueOnUnmount,
  color,
  onChange,
  onDropdownChange,
  ...rest
}) => {
  const {
    fieldError,
    fieldValue,
    unsetFormValue,
    updateFormValue,
    updateFormTouched,
  } = useFormContext(name);
  const [selectedOptions, setSelectedOptions] = useState<(string | number)[]>(
    fieldValue || initSelectedOptions,
  );
  const errorIcon = !!fieldError || !!error;
  const styles = useStyles();

  const getSelectedOptionsLabels = () => {
    const selectedOptionsText: string[] = [];
    options.forEach(option => {
      if (selectedOptions.includes(option.value)) {
        selectedOptionsText.push(option.label);
      }
    });
    return selectedOptionsText;
  };

  const handleBlur = (isDropdownOpen: boolean) => {
    if (!isDropdownOpen) {
      updateFormTouched(name, true);
    }
    onDropdownChange && onDropdownChange(isDropdownOpen);
  };

  const handleChange = (formValues: FormValuesType) => {
    const pickedOptions: (string | number)[] = [];
    for (const key in formValues) {
      if (formValues[key]) {
        const selectedOption = options.find(option => option.label === key);
        pickedOptions.push(selectedOption!.value);
      }
    }
    setSelectedOptions(pickedOptions);
    updateFormValue(name, pickedOptions);
    onChange && onChange(pickedOptions);
  };

  const getFormInitValues = () => {
    const initValues: FormValuesType = {};
    options.forEach(option => {
      if (selectedOptions.includes(option.value)) {
        initValues[option.label] = true;
      }
    });
    return initValues;
  };

  const onOptionRemove = (v: string) => {
    const currentOption = options.find(option => option.label === v);
    if (currentOption) {
      setSelectedOptions(
        selectedOptions.filter(option => option !== currentOption.value),
      );
    }
  };

  useEffect(() => {
    updateFormValue(name, selectedOptions, true);
    return () => {
      clearFormValueOnUnmount && unsetFormValue(name);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Dropdown
      {...rest}
      color={color}
      onChange={handleBlur}
      value={getSelectedOptionsLabels()}
      dropdownStyle={[styles.dropdown, dropdownStyle]}
      errorIcon={errorIcon}
      variant="labelOutside"
      onOptionRemove={onOptionRemove}
    >
      <Form initialValues={getFormInitValues()} onChange={handleChange}>
        <ScrollView
          style={styles.content}
          contentContainerStyle={styles.innerContent}
        >
          {options.map(option => (
            <Checkbox
              color={color}
              key={option.label}
              label={option.label}
              labelStyle={styles.checkboxText}
              name={option.label}
              style={styles.multiselectItem}
              pressedStyle={styles.multiselectItemPressed}
            />
          ))}
        </ScrollView>
      </Form>
    </Dropdown>
  );
};

export default Multiselect;
