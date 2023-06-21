import React, {useEffect, useState} from 'react';
import {Pressable, ScrollView, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {CloseCircleIcon} from '../Icons';
import {useTheme} from '../Theme';
import Dropdown, {IDropdownProps} from '../Dropdown';
import Checkbox from '../Checkbox';
import Form, {useFormContext} from '../Form';
import Text from '../Text';
import useStyles from './styles';

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
  const {theme} = useTheme();
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

  const handleRemoveOption = (v: string) => {
    const currentOption = options.find(option => option.label === v);
    if (currentOption) {
      setSelectedOptions(
        selectedOptions.filter(option => option !== currentOption.value),
      );
    }
  };

  const renderTags = () => {
    const values = getSelectedOptionsLabels();

    if (values.length === 0) {
      return undefined;
    }

    return (
      <View style={styles.tagsBoxContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Pressable style={styles.tagsBox}>
            {values.map((value, index) => (
              <View style={styles.tag} key={index}>
                <Text variant="components1" style={styles.tagText}>
                  {value}
                </Text>
                <Pressable
                  hitSlop={5}
                  onPress={() => handleRemoveOption(value)}
                  style={styles.removeTagButton}
                >
                  <CloseCircleIcon
                    width={20}
                    height={20}
                    fill={theme.colors.primary.main500}
                  />
                </Pressable>
              </View>
            ))}
          </Pressable>
        </ScrollView>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['rgba(255,255, 255, 0)', '#fff']}
          style={styles.tagsBoxHideGradient}
        />
      </View>
    );
  };

  useEffect(() => {
    updateFormValue(name, selectedOptions, true);
    return () => {
      clearFormValueOnUnmount && unsetFormValue(name);
    };
  }, [selectedOptions]);

  return (
    <Dropdown
      {...rest}
      color={color}
      onChange={handleBlur}
      value={renderTags()}
      dropdownStyle={[styles.dropdown, dropdownStyle]}
      errorIcon={errorIcon}
      variant="labelOutside"
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
