import React, {useEffect, useState} from 'react';
import {Animated, Platform} from 'react-native';

import Input from '../../Input';
import {ISliderProps, SliderValueType} from '../index';
import useStyles from './styles';

interface ISliderInputProps {
  type: 'up' | 'down';
  value: SliderValueType;
  setValue: (value: number) => void;
  setButtonPosition: (
    value: number,
    buttonPosition: Animated.Value,
    initWidth?: number,
  ) => void;
  buttonPosition: Animated.Value;
  min: number;
  max: number;
  testID?: string;
  minDistance?: ISliderProps['minDistance'];
}

const SliderInput: React.FC<ISliderInputProps> = ({
  type,
  value: initialValue,
  setValue,
  setButtonPosition,
  buttonPosition,
  max,
  min,
  testID,
  minDistance,
}) => {
  const value = Array.isArray(initialValue)
    ? type === 'up'
      ? initialValue[1]
      : initialValue[0]
    : initialValue;
  const [inputWidth, setInputWidth] = useState(26);
  const [inputValue, setInputValue] = useState<string>(String(value));
  const [error, setError] = useState(false);
  const styles = useStyles();

  useEffect(() => {
    setInputValue(String(value));
  }, [value]);

  const setValueWithPosition = (newVal: number) => {
    setValue(newVal);
    setButtonPosition(newVal, buttonPosition);
    setInputValue(String(newVal));
  };

  const handleChangeText = (text: string) => {
    //Bug in react native with onContentSizeChange on Android, see: https://github.com/facebook/react-native/issues/29702
    //Remove when fixed
    if (Platform.OS === 'android') {
      setInputWidth(text.length * 8.4 + 20);
    }
    setError(false);
    const newVal = +text;

    if (isNaN(newVal)) {
      setError(true);
    }
    if (Array.isArray(initialValue)) {
      if (type === 'up') {
        if (
          newVal > max ||
          (minDistance && newVal < initialValue[0] + minDistance)
        ) {
          setError(true);
        }
      }
      if (type === 'down') {
        if (
          newVal > initialValue[1] ||
          (minDistance && newVal > initialValue[1] - minDistance)
        ) {
          setError(true);
        }
      }
    }
    if (newVal > max || newVal < min) {
      setError(true);
    }
    setInputValue(text);
  };

  const handleSubmitEditing = () => {
    setError(false);
    const newVal = +inputValue;

    if (isNaN(newVal)) {
      setInputValue(String(value));
      return setValueWithPosition(value);
    }
    if (Array.isArray(initialValue)) {
      if (type === 'up') {
        if (newVal > max) {
          return setValueWithPosition(max);
        }
        if (minDistance && newVal < initialValue[0] + minDistance) {
          return setValueWithPosition(initialValue[0] + minDistance);
        }
      }
      if (type === 'down') {
        if (minDistance && newVal > initialValue[1] - minDistance) {
          return setValueWithPosition(initialValue[1] - minDistance);
        }
        if (newVal < min) {
          return setValueWithPosition(min);
        }
      }
    }
    if (newVal > max) {
      return setValueWithPosition(max);
    }
    if (newVal < min) {
      return setValueWithPosition(min);
    }
    return setValueWithPosition(newVal);
  };

  return (
    <Input
      style={[{width: inputWidth}]}
      onContentSizeChange={e => {
        // Works only on iOS, see comment above
        Platform.OS === 'ios' &&
          setInputWidth(18 + e.nativeEvent.contentSize.width);
      }}
      value={inputValue}
      onChangeText={handleChangeText}
      onSubmitEditing={handleSubmitEditing}
      controlled
      textAlign="center"
      error={error}
      keyboardType="numeric"
      returnKeyType="done"
      inputWrapperStyle={styles.inputWrapperStyle}
      testID={testID}
    />
  );
};

export default SliderInput;
