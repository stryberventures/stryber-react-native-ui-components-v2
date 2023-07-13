import React, {FC, useEffect, useRef, useState} from 'react';
import {
  Animated,
  View,
  PanResponder,
  LayoutChangeEvent,
  ViewStyle,
  StyleProp,
  PanResponderInstance,
} from 'react-native';

import {SLIDER_CONFIG} from './constants';
import SliderLayout from './SliderLayout';
import useStyles from './styles';
import SliderInput from './SliderInput';
import {useFormContext} from '../Form';
import Text from '../Text';
import {getAnimatedValue, getNumberLength} from '../../utils';

export type SliderValueType = number | [number, number];

export interface ISliderProps {
  value: SliderValueType;
  max: number;
  min?: number;
  step?: number | undefined;
  smooth?: boolean;
  color?: 'primary' | 'secondary';
  layout?: 'regular' | 'labelHidden';
  showTooltip?: boolean;
  showInput?: boolean;
  stepDotsIndicator?: boolean;
  leftLabel?: (min: number, disabled?: boolean) => React.ReactNode;
  rightLabel?: (max: number, disabled?: boolean) => React.ReactNode;
  minDistance?: number;
  style?: StyleProp<ViewStyle>;
  onChange?: (value: SliderValueType) => void;
  name?: string;
  clearFormValueOnUnmount?: boolean;
  controlled?: boolean;
  disabled?: boolean;
}

const Slider: FC<ISliderProps> = ({
  value: initialValue = 1,
  step = 1,
  min = 0,
  max = 9,
  onChange = () => {},
  smooth = true,
  color = 'primary',
  showTooltip = true,
  showInput = false,
  rightLabel,
  leftLabel,
  layout = 'regular',
  stepDotsIndicator = false,
  style,
  name = 'slider',
  clearFormValueOnUnmount,
  minDistance = 0,
  controlled,
  disabled = false,
}) => {
  const {fieldValue, unsetFormValue, updateFormValue} = useFormContext(name);
  const [width, setWidth] = useState(1);
  const [topButton, setTopButton] = useState('up');
  const [internalValue, setInternalValue] = useState<SliderValueType>(
    fieldValue || initialValue,
  );
  const [upButtonPanResponder, setUpButtonPanResponder] =
    useState<PanResponderInstance | null>(null);
  const [downButtonPanResponder, setDownButtonPanResponder] =
    useState<PanResponderInstance | null>(null);

  const positionUp = useRef(new Animated.Value(0)).current;
  const positionDown = useRef(new Animated.Value(0)).current;
  const [buttonUpActive, setButtonUpActive] = useState(0);
  const [buttonDownActive, setButtonDownActive] = useState(0);
  const buttonUpTouched = useRef(new Animated.Value(0)).current;
  const buttonDownTouched = useRef(new Animated.Value(0)).current;
  const isPositionDownHigher =
    getAnimatedValue(positionDown) > getAnimatedValue(positionUp);

  const styles = useStyles(color);

  const setValueUpWrapper = (value: number) => {
    if (Array.isArray(internalValue)) {
      const {interpolatedValueDown} = getValues();
      updateFormValue(name, [interpolatedValueDown, value]);
      setInternalValue([interpolatedValueDown, value]);
    } else {
      updateFormValue(name, value);
      setInternalValue(value);
    }
  };

  const setValueDownWrapper = (value: number) => {
    if (Array.isArray(internalValue)) {
      const {interpolatedValueUp} = getValues();
      updateFormValue(name, [value, interpolatedValueUp]);
      setInternalValue([value, interpolatedValueUp]);
    }
  };

  useEffect(() => {
    setUpButtonPanResponder(createUpButtonPanResponder());
    setDownButtonPanResponder(createDownButtonPanResponder());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  useEffect(() => {
    buttonUpActive && setButtonDownActive(0);
  }, [buttonUpActive]);

  useEffect(() => {
    buttonDownActive && setButtonUpActive(0);
  }, [buttonDownActive]);

  useEffect(() => {
    updateFormValue(name, internalValue, true);
    return () => {
      clearFormValueOnUnmount && unsetFormValue(name);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (controlled) {
      if (Array.isArray(initialValue)) {
        if (initialValue[0] >= min && initialValue[0] <= max) {
          setValueDownWrapper(initialValue[0]);
          if (!getAnimatedValue(buttonDownTouched)) {
            setButtonPosition(initialValue[0], positionDown);
          }
        }
        if (initialValue[1] >= min && initialValue[1] <= max) {
          setValueUpWrapper(initialValue[1]);
          if (!getAnimatedValue(buttonUpTouched)) {
            setButtonPosition(initialValue[1], positionUp);
          }
        }
      } else {
        if (initialValue >= min && initialValue <= max) {
          setValueUpWrapper(initialValue);
          if (!getAnimatedValue(buttonUpTouched)) {
            setButtonPosition(initialValue, positionUp);
          }
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValue, buttonDownTouched, buttonUpTouched]);

  const getRoundedValue = (value: number) => {
    const stepCount = Math.round(value / step!);
    return Math.round(stepCount * step!);
  };

  const getValues = () => {
    const interpolatedValueUp = getAnimatedValue(
      positionUp.interpolate({
        inputRange: [0, width],
        outputRange: [min, max],
        extrapolate: 'clamp',
      }),
    );
    const interpolatedValueDown = getAnimatedValue(
      positionDown.interpolate({
        inputRange: [0, width],
        outputRange: [min, max],
        extrapolate: 'clamp',
      }),
    );
    return {
      interpolatedValueUp: getRoundedValue(interpolatedValueUp),
      interpolatedValueDown: getRoundedValue(interpolatedValueDown),
    };
  };

  const onSliderChange = () => {
    const {interpolatedValueUp, interpolatedValueDown} = getValues();
    if ((buttonUpTouched as any)._value) {
      setValueUpWrapper(interpolatedValueUp);
    }
    if ((buttonDownTouched as any)._value) {
      setValueDownWrapper(interpolatedValueDown);
    }
    const newValue = Array.isArray(internalValue)
      ? ([interpolatedValueDown, interpolatedValueUp] as [number, number])
      : interpolatedValueUp;
    onChange(newValue);
  };

  const getRoundedOffset = (offset: number) => {
    if (smooth || !step) {
      return offset;
    }
    const positionToValueRatio = width / (max - min);
    const positionStep = positionToValueRatio * step!;
    const stepLeft = offset / positionStep - Math.floor(offset / positionStep);
    if (stepLeft >= 0.5 || stepLeft <= -0.5) {
      return Math.ceil(offset / positionStep) * positionStep;
    }

    return Math.floor(offset / positionStep) * positionStep;
  };

  const getButtonPositionFromValue = (value: number, initWidth?: number) => {
    const sliderWidth = initWidth || width;
    const positionToValueRatio = sliderWidth / (max - min);
    return (value - min) * positionToValueRatio;
  };

  const createUpButtonPanResponder = () => {
    let value = 0;
    return PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderTerminationRequest: () => false,
      onPanResponderGrant: () => {
        value = (positionUp as any)._value;
        positionUp.setOffset(value);
      },
      onPanResponderStart: () => {
        positionUp.setValue(0);
        setButtonUpActive(1);
        buttonUpTouched.setValue(1);
      },
      onPanResponderMove: (_, gestureState) => {
        let dx = gestureState.dx;
        const positionDownWithOffset =
          getAnimatedValue(positionDown) +
          getButtonPositionFromValue(minDistance);
        const newPosition = value + gestureState.dx;

        if (newPosition >= width) {
          dx = width - value;
        } else if (minDistance && newPosition <= positionDownWithOffset) {
          dx = positionDownWithOffset - value;
        } else if (newPosition <= 0) {
          dx = -value;
        }
        positionUp.setValue(getRoundedOffset(dx));
        onSliderChange();
      },
      onPanResponderRelease: () => {
        value = 0;
        positionUp.flattenOffset();
        const positionUpValue = getAnimatedValue(positionUp);
        const buttonWidth = SLIDER_CONFIG.buttonRadius * 2;
        if (positionUpValue >= width - buttonWidth) {
          setTopButton('down');
        }
        if (positionUpValue <= buttonWidth) {
          setTopButton('up');
        }
        buttonUpTouched.setValue(0);
      },
    });
  };

  const createDownButtonPanResponder = () => {
    let value = 0;
    return PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        value = (positionDown as any)._value;
        positionDown.setOffset(value);
      },
      onPanResponderStart: () => {
        positionDown.setValue(0);
        setButtonDownActive(1);
        buttonDownTouched.setValue(1);
      },
      onPanResponderMove: (_, gestureState) => {
        let dx = gestureState.dx;
        const positionUpWithOffset =
          getAnimatedValue(positionUp) -
          getButtonPositionFromValue(minDistance);
        const newPosition = value + gestureState.dx;

        if (minDistance && newPosition >= positionUpWithOffset) {
          dx = positionUpWithOffset - value;
        } else if (newPosition >= width) {
          dx = width - value;
        } else if (newPosition <= 0) {
          dx = -value;
        }
        positionDown.setValue(getRoundedOffset(dx));
        onSliderChange();
      },
      onPanResponderRelease: () => {
        value = 0;
        positionDown.flattenOffset();
        const positionDownValue = getAnimatedValue(positionUp);
        const buttonWidth = SLIDER_CONFIG.buttonRadius * 2;
        if (positionDownValue <= buttonWidth) {
          setTopButton('up');
        }
        if (positionDownValue >= width - buttonWidth) {
          setTopButton('down');
        }
        buttonDownTouched.setValue(0);
      },
    });
  };

  const setButtonPosition = (
    value: number,
    buttonPosition: Animated.Value,
    initWidth?: number,
  ) => {
    buttonPosition.setValue(getButtonPositionFromValue(value, initWidth));
  };

  const onRangeBarContainerLayout = ({nativeEvent}: LayoutChangeEvent) => {
    const newWidth = Math.round(
      nativeEvent.layout.width - SLIDER_CONFIG.buttonRadius * 2,
    );
    if (Array.isArray(internalValue)) {
      setButtonPosition(internalValue[0], positionDown, newWidth);
      setButtonPosition(internalValue[1], positionUp, newWidth);
    } else {
      setButtonPosition(internalValue, positionUp, newWidth);
    }
    setWidth(newWidth);
  };

  const renderButton = (type: 'up' | 'down') => {
    const isUp = type === 'up';
    const panResponder = isUp ? upButtonPanResponder : downButtonPanResponder;

    return (
      <Animated.View
        style={[
          styles.buttonWrapper,
          {
            transform: [
              {
                translateX: isUp ? positionUp : positionDown,
              },
            ],
          },
          topButton === type && styles.topButton,
        ]}
        testID={`slider_button_${type}`}
        {...(!disabled ? panResponder?.panHandlers : {})}>
        {showTooltip && (
          <Animated.View
            style={[
              styles.labelContainer,
              styles.buttonTooltip,
              {
                opacity: isUp ? buttonUpTouched : buttonDownTouched,
                //Calculating tooltip width based on number length
                width:
                  SLIDER_CONFIG.maxNumWidth +
                  SLIDER_CONFIG.maxNumWidth *
                    (Array.isArray(internalValue)
                      ? isUp
                        ? getNumberLength(internalValue[1])
                        : getNumberLength(internalValue[0])
                      : getNumberLength(internalValue)),
              },
            ]}>
            <Text
              numberOfLines={1}
              ellipsizeMode="clip"
              style={styles.tooltipText}>
              {Array.isArray(internalValue)
                ? isUp
                  ? internalValue[1]
                  : internalValue[0]
                : internalValue}
            </Text>
          </Animated.View>
        )}
        {showInput && (
          <Animated.View
            style={[
              styles.buttonInputWrapper,
              {opacity: isUp ? buttonUpActive : buttonDownActive},
            ]}>
            <SliderInput
              type={type}
              value={internalValue}
              setValue={isUp ? setValueUpWrapper : setValueDownWrapper}
              setButtonPosition={setButtonPosition}
              buttonPosition={isUp ? positionUp : positionDown}
              min={min}
              max={max}
              minDistance={minDistance}
              testID={`slider_input_${type}`}
            />
          </Animated.View>
        )}
        <View style={[styles.button, disabled && styles.disabledButton]} />
      </Animated.View>
    );
  };

  const renderRangeBar = () => {
    const dotsArr = stepDotsIndicator
      ? new Array(max / step + 2).fill(null)
      : null;
    return (
      <>
        <View
          style={styles.rangeBarWrapper}
          onLayout={onRangeBarContainerLayout}>
          {stepDotsIndicator &&
            dotsArr!.map((_, i) => (
              <View
                key={i}
                style={[
                  styles.dot,
                  {
                    left:
                      (width / (max / step)) * i +
                      SLIDER_CONFIG.buttonRadius +
                      10,
                  },
                ]}
              />
            ))}
          <Animated.View
            style={[
              styles.rangeBar,
              {
                marginLeft: isPositionDownHigher ? positionUp : positionDown,
                marginRight: isPositionDownHigher
                  ? positionDown.interpolate({
                      inputRange: [0, 1, width],
                      outputRange: [width, width - 1, 0],
                      extrapolate: 'clamp',
                    })
                  : positionUp.interpolate({
                      inputRange: [0, 1, width],
                      outputRange: [width, width - 1, 0],
                      extrapolate: 'clamp',
                    }),
              },
              disabled && styles.disabledRangeBar,
            ]}
          />
        </View>
        {Array.isArray(initialValue) && renderButton('down')}
        {renderButton('up')}
      </>
    );
  };

  const renderLabel = (labelValue: number) => (
    <View
      style={[
        styles.labelContainer,
        disabled && styles.disabledLabelContainer,
      ]}>
      <Text style={styles.tooltipText}>{labelValue}</Text>
    </View>
  );

  return (
    <SliderLayout
      type={layout}
      wrapperStyle={style}
      leftLabel={leftLabel ? leftLabel(min, disabled) : renderLabel(min)}
      rightLabel={rightLabel ? rightLabel(max, disabled) : renderLabel(max)}
      rangeBar={renderRangeBar()}
    />
  );
};

export default Slider;
