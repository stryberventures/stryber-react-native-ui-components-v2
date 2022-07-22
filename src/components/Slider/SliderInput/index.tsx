import React, {useEffect, useState} from 'react';
import {Animated, Platform} from 'react-native';

import Input from '../../Input';
import {ISliderProps} from '../index';

interface ISliderInputProps {
  type: 'up' | 'down';
  valueUp: number;
  valueDown: number;
  setValue: (value: number) => void;
  setButtonPosition: (
    value: number,
    buttonPosition: Animated.Value,
    initWidth?: number,
  ) => void;
  buttonPosition: Animated.Value;
  range: boolean;
  min: number;
  max: number;
  testID?: string;
  minDistance?: ISliderProps['minDistance'];
}

const SliderInput: React.FC<ISliderInputProps> = ({
  type,
  valueUp,
  valueDown,
  setValue,
  setButtonPosition,
  buttonPosition,
  range,
  max,
  min,
  testID,
  minDistance,
}) => {
  const value = type === 'up' ? valueUp : valueDown;
  const [inputWidth, setInputWidth] = useState(26);
  const [inputValue, setInputValue] = useState<string>(String(value));
  const [error, setError] = useState(false);

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
    if (range) {
      if (type === 'up') {
        if (newVal > max || (minDistance && newVal < valueDown + minDistance)) {
          setError(true);
        }
      }
      if (type === 'down') {
        if (
          newVal > valueUp ||
          (minDistance && newVal > valueUp - minDistance)
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
    if (range) {
      if (type === 'up') {
        if (newVal > max) {
          return setValueWithPosition(max);
        }
        if (minDistance && newVal < valueDown + minDistance) {
          return setValueWithPosition(valueDown + minDistance);
        }
      }
      if (type === 'down') {
        if (minDistance && newVal > valueUp - minDistance) {
          return setValueWithPosition(valueUp - minDistance);
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
      testID={testID}
    />
  );
};

export default SliderInput;
