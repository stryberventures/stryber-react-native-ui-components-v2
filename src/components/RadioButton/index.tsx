import React, {useEffect, useState} from 'react';
import useStyles from './styles';
import {Text, Pressable, PressableProps, View} from 'react-native';
import RadioButtonIcon from './RadioButtonIcon';
import HintMessage from '../HintMessage';
import ErrorMessage from '../ErrorMessage';
import {useFormContext} from '../Form';

export interface IRadioButtonProps extends PressableProps {
  name?: string;
  value: any;
  placeholder?: string;
  checked?: boolean;
  onChange?: (value: any) => void;
  error?: string;
  disabled?: boolean;
  variant?: 'round' | 'check';
  size?: 'medium' | 'small';
  hint?: string;
  clearFormValueOnUnmount?: boolean;
}

const RadioButton: React.FC<IRadioButtonProps> = ({
  value,
  name = 'unnamed',
  variant = 'round',
  disabled,
  hint,
  error,
  placeholder,
  onPress: _,
  size = 'medium',
  checked,
  onChange,
  clearFormValueOnUnmount,
  ...rest
}) => {
  const {
    fieldValue,
    fieldError,
    updateFormValue,
    unsetFormValue,
  } = useFormContext(name);

  const checkedValue = fieldValue === value;
  const errorMessage = fieldError || error;

  const [isPressed, setIsPressed] = useState(false);

  const styles = useStyles(size);

  const handlePressIn = () => setIsPressed(true);
  const handlePressOut = () => setIsPressed(false);

  const onChangeWrapper = () => {
    updateFormValue(name, value);
    onChange && onChange(value);
  };

  useEffect(() => {
    if (checked) {
      updateFormValue(name, value, true);
    }
    return () => {
      clearFormValueOnUnmount && unsetFormValue(name);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onChangeWrapper}
      disabled={disabled}
      style={disabled && styles.disabled}
      {...rest}
    >
      <View style={styles.radioWrapper}>
        <RadioButtonIcon
          checked={checkedValue}
          isPressed={isPressed}
          variant={variant}
          size={size}
        />
        <Text style={styles.radioText}>{placeholder}</Text>
      </View>
      <HintMessage
        style={styles.textMargin}
        message={hint}
        disabled={disabled}
      />
      <ErrorMessage style={styles.textMargin} error={errorMessage} />
    </Pressable>
  );
};

export default RadioButton;
