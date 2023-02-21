import React, {useState} from 'react';
import useStyles from './styles';
import Input, {IInputProps} from '../Input';
import CounterIcon from './CounterIcon';
import {View} from 'react-native';
import {useFormContext} from '../Form';

export interface INumberInputProps
  extends Omit<IInputProps, 'value' | 'onChange'> {
  withQuantityCounter?: boolean;
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value?: number) => void;
}

const NumberInput: React.FC<INumberInputProps> = ({
  value = '',
  step = 1,
  min,
  max,
  withQuantityCounter = true,
  name = 'number_input',
  error,
  onChange,
  rightContent,
  disabled,
  ...rest
}) => {
  const {fieldError, fieldValue, updateFormValue} = useFormContext(name);
  const initValue = fieldValue || value;
  const [internalValue, setInternalValue] = useState<string>(String(initValue));
  const errorMessage = fieldError || error;
  const styles = useStyles();

  const isNumberValue = typeof +internalValue === 'number';

  const handleChange = (newVal: string) => {
    setInternalValue(newVal);
    updateFormValue(name, +newVal);
    onChange && onChange(+newVal);
  };

  const checkValue = (newVal: number) => {
    if (max && newVal > max) {
      return handleChange(String(max));
    }
    if (min && newVal < min) {
      return handleChange(String(min));
    }
  };

  const handleButtonPress = (buttonType: 'plus' | 'minus') => {
    if (!isNumberValue) {
      return handleChange(String(min));
    }
    const newVal =
      buttonType === 'plus' ? +internalValue! + step : +internalValue! - step;
    if ((max && newVal > max) || (min && newVal < min)) {
      return checkValue(newVal);
    }
    handleChange(String(newVal));
  };

  const handlePlus = () => handleButtonPress('plus');
  const handleMinus = () => handleButtonPress('minus');

  return (
    <Input
      name={name}
      keyboardType="numeric"
      returnKeyType="done"
      value={isNumberValue ? String(internalValue) : undefined}
      rightContent={
        withQuantityCounter && (
          <>
            {rightContent && (
              <View style={styles.rightContent}>{rightContent}</View>
            )}
            <CounterIcon
              onPress={handleMinus}
              testID="test_number_input_minus"
              variant="minus"
              disabled={disabled}
            />
            <View style={styles.divider} />
            <CounterIcon
              onPress={handlePlus}
              testID="test_number_input_plus"
              variant="plus"
              disabled={disabled}
            />
          </>
        )
      }
      error={errorMessage}
      onChangeText={handleChange}
      disabled={disabled}
      controlled
      {...rest}
    />
  );
};

export default NumberInput;
