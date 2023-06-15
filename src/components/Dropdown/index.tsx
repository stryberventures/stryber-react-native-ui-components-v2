import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useEffect,
} from 'react';
import Animated, {
  useSharedValue,
  useDerivedValue,
  withTiming,
  useAnimatedStyle,
  interpolate,
  Easing,
  runOnJS,
} from 'react-native-reanimated';
import useStyles from './styles';
import {
  GestureResponderEvent,
  Modal,
  Pressable,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import LabelOutsideInputLayout, {
  ILabelOutsideInputLayoutProps,
} from '../Input/LabelOutsideInputLayout';
import FloatingLabelInputLayout from '../Input/FloatingLabelInputLayout';
import {ArrowIcon, ErrorIcon} from '../Icons';
import {useTheme} from '../Theme';
import Text from '../Text';
import {validateInputValueLength} from '../../utils';

const MAX_DROPDOWN_HEIGHT = 300;

export interface IDropdownProps extends ILabelOutsideInputLayoutProps {
  value?: string;
  placeholder?: string;
  dropdownStyle?: StyleProp<ViewStyle>;
  onChange?: (open: boolean) => void;
  variant?: 'floatingLabel' | 'labelOutside';
  errorIcon?: boolean;
}

export interface IDropdownPosition {
  top: number;
  left: number;
  width: number;
}

export interface IDropdownRef {
  open: (event?: GestureResponderEvent) => void;
  close: () => void;
}

const Dropdown = forwardRef<IDropdownRef, IDropdownProps>(
  (
    {
      placeholder,
      value,
      onPress,
      disabled,
      children,
      dropdownStyle,
      onChange,
      variant = 'floatingLabel',
      errorIcon,
      ...rest
    },
    ref,
  ) => {
    const {theme} = useTheme();
    const dropdownInputRef = useRef<View>(null);
    const [preVisible, setPreVisible] = useState(false);
    const [visible, setVisible] = useState(false);
    const [dropdownPosition, setDropdownPosition] = useState<IDropdownPosition>(
      {
        top: 0,
        left: 0,
        width: 0,
      },
    );
    const styles = useStyles(dropdownPosition);
    const dropdownAnimatingValue = useSharedValue(0);
    const onDropdownAnimationCallback = () => {
      if (!preVisible) {
        setVisible(false);
      }
    };
    const dropdownAnimatedValue = useDerivedValue(() =>
      withTiming(
        dropdownAnimatingValue.value,
        {
          duration: 300,
          easing: Easing.ease,
        },
        () => {
          runOnJS(onDropdownAnimationCallback)();
        },
      ),
    );
    const dropdownAnimatedStyles = useAnimatedStyle(() => ({
      maxHeight: interpolate(
        dropdownAnimatedValue.value,
        [0, 1],
        [0, MAX_DROPDOWN_HEIGHT],
      ),
    }));
    const iconAnimatedStyles = useAnimatedStyle(() => ({
      transform: [
        {
          rotateZ:
            interpolate(dropdownAnimatedValue.value, [0, 1], [0, 180]) + 'deg',
        },
      ],
    }));

    const handleOpen = (event?: GestureResponderEvent) => {
      dropdownInputRef.current!.measure((x, y, width, height, pageX, pageY) => {
        setDropdownPosition({top: pageY + height, left: pageX, width});
      });
      setPreVisible(true);
      setVisible(true);
      onChange && onChange(true);
      onPress && onPress(event!);
    };

    const handleClose = () => {
      setPreVisible(false);
      onChange && onChange(false);
    };

    const renderDropdown = () => (
      <Modal visible={visible} transparent animationType="none">
        <Pressable style={styles.overlay} onPress={handleClose} />
        <Animated.View
          style={[styles.dropdown, dropdownAnimatedStyles, dropdownStyle]}
        >
          <Shadow
            style={[styles.dropdownShadow]}
            distance={10}
            offset={[0, 6]}
            startColor="rgba(102, 112, 133, 0.15)"
            paintInside={false}
            sides={{start: true, end: true, top: false, bottom: true}}
          >
            <View style={styles.dropdownInner}>{children}</View>
          </Shadow>
        </Animated.View>
      </Modal>
    );

    useImperativeHandle(ref, () => ({
      open: handleOpen,
      close: handleClose,
    }));

    useEffect(() => {
      dropdownAnimatingValue.value = preVisible ? 1 : 0;
    }, [preVisible]);

    const LayoutComponent =
      variant === 'floatingLabel'
        ? FloatingLabelInputLayout
        : LabelOutsideInputLayout;

    return (
      <LayoutComponent
        isFocused={visible}
        ref={dropdownInputRef}
        onPress={handleOpen}
        isEmpty={!value}
        rightContent={
          <>
            {errorIcon && (
              <ErrorIcon
                variant="filled"
                width={20}
                height={20}
                fill={theme.colors.error.dark600}
                style={styles.errorIcon}
              />
            )}
            <Animated.View style={[styles.icon, iconAnimatedStyles]}>
              <ArrowIcon
                variant="down"
                fill={
                  disabled
                    ? theme.colors.neutralGray.medium300
                    : theme.colors.neutralGray.main500
                }
              />
            </Animated.View>
          </>
        }
        disabled={disabled}
        {...rest}
      >
        {renderDropdown()}
        {/*This block is used to keep the label in the same position when there are no text*/}
        {!placeholder && !value && <View style={styles.emptyBlock} />}
        <Text
          variant={variant === 'floatingLabel' ? 'components1' : 'components2'}
          style={[
            styles.text,
            !!placeholder && styles.placeholderText,
            !!value && styles.valueText,
            disabled && styles.disabledText,
          ]}
        >
          {(!!value && validateInputValueLength(value)) || placeholder}
        </Text>
      </LayoutComponent>
    );
  },
);

export default Dropdown;
