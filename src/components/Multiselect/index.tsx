import React, {useEffect, useState, useRef} from 'react';
import {
  Pressable,
  ScrollView,
  View,
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {CloseCircleIcon, SearchIcon} from '../Icons';
import {useTheme, isRTL} from '../Theme';
import Dropdown, {IDropdownProps} from '../Dropdown';
import Form, {useFormContext} from '../Form';
import Input from '../Input';
import Text from '../Text';
import MultiselectOption from './MultiselectOption';
import useStyles from './styles';

export interface IMultiselectOption {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
}

export interface IMultiselectProps
  extends Omit<IDropdownProps, 'children' | 'value' | 'onChange' | 'error'> {
  name?: string;
  options: IMultiselectOption[];
  selectedOptions?: (number | string)[];
  clearFormValueOnUnmount?: boolean;
  withSearch?: boolean;
  searchPlaceholder?: string;
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
  disabled,
  withSearch = false,
  slideUp = false,
  searchPlaceholder,
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
  const [searchText, setSearchText] = useState<string>();
  const errorIcon = !!fieldError || !!error;
  const {theme} = useTheme();
  const styles = useStyles(slideUp || withSearch);
  const tagsScrollRef = useRef<ScrollView>(null);
  let tagsScrollPosition = useRef(0).current;
  let tagsScrollBoxWidth = useRef(0).current;

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
    const onScrollViewLayout = (e: LayoutChangeEvent) =>
      (tagsScrollBoxWidth = e.nativeEvent.layout.width);
    const onScrollViewScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) =>
      (tagsScrollPosition = e.nativeEvent.contentOffset.x);
    const onTagsBoxLayout = (e: LayoutChangeEvent) => {
      if (
        tagsScrollBoxWidth <
        e.nativeEvent.layout.width - tagsScrollPosition
      ) {
        tagsScrollRef.current?.scrollToEnd({animated: true});
      }
    };

    if (values.length === 0) {
      return undefined;
    }

    return (
      <View
        pointerEvents={disabled ? 'none' : 'auto'}
        style={[
          styles.tagsBoxContainer,
          rest.variant === 'floatingLabel' &&
            styles.tagsBoxContainerFloatingLabel,
        ]}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tagsScrollBox}
          onLayout={onScrollViewLayout}
          onScroll={onScrollViewScroll}
          ref={tagsScrollRef}>
          <Pressable style={styles.tagsBox} onLayout={onTagsBoxLayout}>
            {values.map((value, index) => (
              <View style={styles.tag} key={index}>
                <Text variant="components1" style={styles.tagText}>
                  {value}
                </Text>
                <Pressable
                  hitSlop={5}
                  onPress={() => handleRemoveOption(value)}
                  style={styles.removeTagButton}>
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
          start={{x: isRTL ? 1 : 0, y: 0}}
          end={{x: isRTL ? 0 : 1, y: 0}}
          colors={['rgba(255,255, 255, 0)', '#fff']}
          style={styles.tagsBoxHideGradient}
        />
      </View>
    );
  };

  const onChangeTextSearchInput = (t: string) => {
    setSearchText(t);
  };
  const onDropdownClose = () => {
    setSearchText('');
  };

  useEffect(() => {
    updateFormValue(name, selectedOptions, true);
    return () => {
      clearFormValueOnUnmount && unsetFormValue(name);
    };
  }, [selectedOptions]);

  const filteredOptions = (() => {
    if (!searchText) {
      return options;
    }
    const regex = new RegExp(`${searchText}`, 'i');
    return options.filter(option => option.label.match(regex));
  })();

  return (
    <Dropdown
      {...rest}
      color={color}
      onChange={handleBlur}
      value={renderTags()}
      dropdownStyle={[styles.dropdown, dropdownStyle]}
      style={[
        rest.variant === 'floatingLabel' && styles.layoutFloatingLabel,
        rest.style,
      ]}
      labelContainerStyle={
        rest.variant === 'floatingLabel' && styles.labelContainerFloatingLabel
      }
      textStyle={
        rest.variant === 'floatingLabel' && styles.dropdownTextFloatingLabel
      }
      errorIcon={errorIcon}
      disabled={disabled}
      slideUp={slideUp || withSearch}
      onClose={onDropdownClose}>
      {(slideUp || withSearch) && (
        <Text style={styles.searchLabel}>{rest.label}</Text>
      )}
      {withSearch && (
        <View style={styles.searchContainer}>
          <Input
            inputWrapperStyle={styles.searchInput}
            withRemoveButton
            onChangeText={onChangeTextSearchInput}
            variant="labelOutside"
            placeholder={searchPlaceholder}
            leftContent={
              <SearchIcon
                width={20}
                height={20}
                fill={theme.colors.text.secondary}
              />
            }
          />
        </View>
      )}
      <Form initialValues={getFormInitValues()} onChange={handleChange}>
        <ScrollView
          style={styles.content}
          contentContainerStyle={styles.innerContent}>
          {filteredOptions.map(option => (
            <MultiselectOption
              color={color}
              key={option.label}
              label={option.label}
              name={option.label}
              icon={option.icon}
            />
          ))}
        </ScrollView>
      </Form>
    </Dropdown>
  );
};

export default Multiselect;
