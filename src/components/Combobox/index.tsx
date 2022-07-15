import React, {useEffect} from 'react';
import useStyles from './styles';
import {
  Pressable,
  Keyboard,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  ScrollView,
  ViewStyle,
  StyleProp,
} from 'react-native';
import {useTheme} from '../Theme';
import {useFormContext} from '../Form';
import Input, {IInputProps} from '../Input';
import {ArrowDownIcon} from '../Icons';
import SelectItem from '../Select/SelectItem';
import {ISelectOption} from '../Select';

export interface IComboboxProps extends Omit<IInputProps, 'onChange'> {
  options: ISelectOption[];
  dropdownStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  onChange?: (value: string | number) => void;
}

const Combobox: React.FC<IComboboxProps> = ({
  name = 'combobox',
  value = '',
  error,
  options,
  disabled,
  onBlur,
  onChangeText,
  clearFormValueOnUnmount,
  style,
  dropdownStyle,
  inputStyle,
  onChange,
  ...rest
}) => {
  const {
    fieldError,
    fieldValue,
    unsetFormValue,
    updateFormValue,
    updateFormTouched,
  } = useFormContext(name);

  const [inputValue, setInputValue] = React.useState(fieldValue || value);
  const errorMessage = fieldError || error;
  const [visible, setVisible] = React.useState(false);
  const extractedLabels = options.map(option => option.label);
  const {theme} = useTheme();
  const styles = useStyles();

  const getOptionValueByLabel = (label: string) => {
    const option = options.find(optionItem => optionItem.label === label);
    return option ? option.value : '';
  };

  const onChangeTextWrapper = (text: string) => {
    setInputValue(text);
    updateFormValue(name, getOptionValueByLabel(text));
    onChangeText && onChangeText(text);
    onChange && onChange(getOptionValueByLabel(text));
  };

  const handleFocus = () => {
    setVisible(true);
  };

  const handleSearch = (arr: ISelectOption[]) => {
    return arr.filter(item =>
      item.label.toLowerCase().includes(inputValue.toLowerCase()),
    );
  };

  const handleDismiss = () => {
    setVisible(false);
    Keyboard.dismiss();
  };

  const handleChoose = (label: string) => {
    onChangeTextWrapper(label);
    handleDismiss();
  };

  const handleCheckValue = () => {
    if (!extractedLabels.includes(inputValue)) {
      onChangeTextWrapper('');
    }
    handleDismiss();
  };

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    updateFormTouched(name, true);
    onBlur && onBlur(e);
  };

  useEffect(() => {
    updateFormValue(name, getOptionValueByLabel(inputValue), true);
    return () => {
      clearFormValueOnUnmount && unsetFormValue(name);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Pressable
      hitSlop={visible ? 10000 : 0}
      onPress={handleCheckValue}
      style={[styles.container, style]}
    >
      <Input
        onFocus={handleFocus}
        value={inputValue}
        onChangeText={onChangeTextWrapper}
        controlled
        error={errorMessage}
        disabled={disabled}
        rightContent={
          <ArrowDownIcon
            fill={disabled ? theme.divider.main : theme.default.dark}
            style={[styles.icon, visible && styles.invertedIcon]}
          />
        }
        onBlur={handleBlur}
        style={inputStyle}
        {...rest}
      />
      {visible && (
        <Pressable style={[styles.dropdown, dropdownStyle]}>
          <ScrollView
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps="always"
          >
            {handleSearch(options).map(option => (
              <SelectItem
                key={option.value}
                onPress={() => handleChoose(option.label)}
                active={inputValue === option.label}
              >
                {option.label}
              </SelectItem>
            ))}
          </ScrollView>
        </Pressable>
      )}
    </Pressable>
  );
};

export default Combobox;
