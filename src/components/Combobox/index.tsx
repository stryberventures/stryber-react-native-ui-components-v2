import React, {useEffect, useState} from 'react';
import useStyles from './styles';
import {
  Pressable,
  Keyboard,
  ViewStyle,
  StyleProp,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  FlatList,
  ListRenderItem,
  ScrollView,
} from 'react-native';
import {useTheme} from '../Theme';
import {useFormContext} from '../Form';
import Input, {IInputProps} from '../Input';
import {ArrowDownIconDeprecated} from '../Icons';
import SelectItem from '../Select/SelectItem';
import {ISelectOption} from '../Select';
import ClearIcon from './ClearIcon';

export interface IComboboxProps
  extends Omit<IInputProps, 'onChange' | 'value'> {
  options: ISelectOption[];
  dropdownStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  onChange?: (option: ISelectOption | null) => void;
  noOptionsFoundText?: string;
  value?: ISelectOption['value'];
}

const COMBOBOX_ITEM_SIZE = 33;

const Combobox: React.FC<IComboboxProps> = ({
  name = 'combobox',
  value = null,
  error,
  options,
  disabled,
  onChangeText,
  clearFormValueOnUnmount,
  style,
  dropdownStyle,
  inputStyle,
  onChange,
  onFocus,
  noOptionsFoundText = 'No options found',
  ...rest
}) => {
  const {fieldError, fieldValue, unsetFormValue, updateFormValue} =
    useFormContext(name);

  const getOptionByValue = (optionValue: string | number) => {
    const option = options.find(optionItem => optionItem.value === optionValue);
    return option ? option : null;
  };

  const [selectedOption, setSelectedOption] = useState<ISelectOption | null>(
    getOptionByValue(fieldValue || value),
  );
  const selectedOptionIndex = selectedOption
    ? options.map(option => option.label).indexOf(selectedOption?.label)
    : 0;
  const [inputValue, setInputValue] = React.useState(
    selectedOption?.label || '',
  );
  const errorMessage = fieldError || error;
  const [visible, setVisible] = React.useState(false);
  const {theme} = useTheme();
  const styles = useStyles();

  const handleSelectOption = (option: ISelectOption) => {
    onChangeTextWrapper(option.label);
    setSelectedOption(option);
    updateFormValue(name, option.value);
    onChange && onChange(option);
    handleDismiss();
  };

  const clearSelectedOption = (skipText?: boolean) => {
    !skipText && onChangeTextWrapper('');
    setSelectedOption(null);
    updateFormValue(name, null);
    onChange && onChange(null);
  };

  const onChangeTextWrapper = (text: string) => {
    if (text === '') {
      clearSelectedOption(true);
    }
    setInputValue(text);
    onChangeText && onChangeText(text);
  };

  const handleDismiss = () => {
    setVisible(false);
    Keyboard.dismiss();
  };

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setVisible(true);
    onFocus && onFocus(e);
  };

  const filterOptionsByInputValue = () => {
    if (inputValue === selectedOption?.label) {
      return options;
    }
    return options.filter(option =>
      option.label.toLowerCase().includes(inputValue.toLowerCase()),
    );
  };

  const handleOutsidePress = () => {
    if (selectedOption) {
      onChangeTextWrapper(selectedOption.label);
    }
    handleDismiss();
  };

  const handleReturnKey = () => {
    handleSelectOption(selectedOption || filterOptionsByInputValue()[0]);
  };

  const renderComboboxItem: ListRenderItem<ISelectOption> = ({item, index}) => (
    <SelectItem
      onPress={() => handleSelectOption(item)}
      active={
        selectedOption ? selectedOption.label === item.label : index === 0
      }>
      {item.label}
    </SelectItem>
  );

  const renderNoOptionsFound = () =>
    !filterOptionsByInputValue().length && (
      <SelectItem disabled>{noOptionsFoundText}</SelectItem>
    );

  useEffect(() => {
    updateFormValue(name, selectedOption?.value, true);
    return () => {
      clearFormValueOnUnmount && unsetFormValue(name);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Pressable
      hitSlop={visible ? 10000 : 0}
      onPress={handleOutsidePress}
      style={[styles.container, style]}>
      <Input
        name={name}
        onFocus={handleFocus}
        value={inputValue}
        onChangeText={onChangeTextWrapper}
        controlled
        error={errorMessage}
        disabled={disabled}
        onSubmitEditing={handleReturnKey}
        returnKeyType="done"
        rightContent={
          <>
            {!!inputValue && visible && (
              <ClearIcon
                style={styles.clearIcon}
                onPress={() => clearSelectedOption()}
                hitSlop={5}
              />
            )}
            <ArrowDownIconDeprecated
              fill={
                disabled
                  ? theme.colors.neutralGray.medium300
                  : theme.colors.neutralGray.main500
              }
              style={[styles.icon, visible && styles.invertedIcon]}
            />
          </>
        }
        style={inputStyle}
        {...rest}
      />
      {visible && (
        <Pressable style={[styles.dropdown, dropdownStyle]}>
          {renderNoOptionsFound()}
          {/* This ScrollView prevent "nested" error for VirtualizedLists inside vertical ScrollViews  */}
          <ScrollView
            horizontal
            contentContainerStyle={styles.scrollView}
            keyboardShouldPersistTaps="always"
            nestedScrollEnabled>
            <FlatList
              data={filterOptionsByInputValue()}
              renderItem={renderComboboxItem}
              contentContainerStyle={styles.content}
              keyboardShouldPersistTaps="always"
              keyExtractor={item => item.label}
              nestedScrollEnabled
              getItemLayout={(data, index) => ({
                length: COMBOBOX_ITEM_SIZE,
                offset: COMBOBOX_ITEM_SIZE * index,
                index,
              })}
              initialScrollIndex={
                inputValue === selectedOption?.label
                  ? selectedOptionIndex
                  : null
              }
            />
          </ScrollView>
        </Pressable>
      )}
    </Pressable>
  );
};

export default Combobox;
