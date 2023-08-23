import React, {useEffect} from 'react';
import useStyles from './styles';
import {ScrollView} from 'react-native';
import Dropdown, {IDropdownProps, IDropdownRef} from '../Dropdown';
import {useFormContext} from '../Form';
import SelectItem from './SelectItem';

export interface ISelectOption {
  label: string;
  value: string | number;
}

export interface ISelectProps
  extends Omit<IDropdownProps, 'children' | 'value' | 'onChange' | 'error'> {
  name?: string;
  options: ISelectOption[];
  selectedOption?: string | number;
  clearFormValueOnUnmount?: boolean;
  onChange?: (selectedOption?: number | string) => void;
  onDropdownChange?: IDropdownProps['onChange'];
  variant?: 'floatingLabel' | 'labelOutside';
  error?: string | boolean;
}

const Select: React.FC<ISelectProps> = ({
  name = 'select',
  options,
  selectedOption: initSelectedOption,
  onChange,
  onDropdownChange,
  clearFormValueOnUnmount,
  error,
  ...rest
}) => {
  const {
    fieldError,
    fieldValue,
    unsetFormValue,
    updateFormValue,
    updateFormTouched,
  } = useFormContext(name);
  const [selectedOption, setSelectedOption] = React.useState<string | number>(
    fieldValue || initSelectedOption,
  );
  const errorIcon = !!fieldError || !!error;
  const dropdownRef = React.useRef<IDropdownRef>(null);
  const styles = useStyles();

  const handleChange = (value: string | number) => {
    setSelectedOption(value);
    updateFormValue(name, value);
    onChange && onChange(value);
    dropdownRef.current!.close();
  };

  const getLabelByValue = () => {
    const option = options.find(
      optionItem => optionItem.value === selectedOption,
    );
    return option ? option.label : '';
  };

  const handleBlur = (isDropdownOpen: boolean) => {
    if (!isDropdownOpen) {
      updateFormTouched(name, true);
    }
    onDropdownChange && onDropdownChange(isDropdownOpen);
  };

  useEffect(() => {
    updateFormValue(name, selectedOption, true);
    return () => {
      clearFormValueOnUnmount && unsetFormValue(name);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Dropdown
      value={getLabelByValue()}
      onChange={handleBlur}
      dropdownStyle={styles.dropdown}
      errorIcon={errorIcon}
      ref={dropdownRef}
      {...rest}>
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.innerContent}>
        {options.map(option => (
          <SelectItem
            key={option.value}
            onPress={() => handleChange(option.value)}
            active={selectedOption === option.value}>
            {option.label}
          </SelectItem>
        ))}
      </ScrollView>
    </Dropdown>
  );
};

export default Select;
