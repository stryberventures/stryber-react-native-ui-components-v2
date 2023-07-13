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
import {
  GestureResponderEvent,
  Modal,
  Pressable,
  StyleProp,
  View,
  ViewStyle,
  Platform,
  useWindowDimensions,
} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import {validateInputValueLength} from '../../utils';
import LabelOutsideInputLayout, {
  ILabelOutsideInputLayoutProps,
} from '../Input/LabelOutsideInputLayout';
import FloatingLabelInputLayout from '../Input/FloatingLabelInputLayout';
import {ArrowIcon, ErrorIcon} from '../Icons';
import {useTheme} from '../Theme';
import Text from '../Text';
import {useKeyboardHeightIOS} from './hooks';
import useStyles from './styles';

const MAX_DROPDOWN_HEIGHT = 300;

export interface IDropdownProps extends ILabelOutsideInputLayoutProps {
  value?: string | React.ReactNode;
  placeholder?: string;
  dropdownStyle?: StyleProp<ViewStyle>;
  onChange?: (open: boolean) => void;
  onClose?: () => void;
  variant?: 'floatingLabel' | 'labelOutside';
  slideUp?: boolean;
  errorIcon?: boolean;
}

export interface IDropdownPosition {
  top?: number;
  bottom?: number;
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
      onClose,
      variant = 'floatingLabel',
      slideUp = false,
      errorIcon,
      ...rest
    },
    ref,
  ) => {
    const {theme} = useTheme();
    const dropdownInputRef = useRef<View>(null);
    const [preVisible, setPreVisible] = useState(false);
    const [visible, setVisible] = useState(false);
    const {height: screenHeight} = useWindowDimensions();
    const keyboardHeightIOS = useKeyboardHeightIOS();
    const [dropdownPosition, setDropdownPosition] = useState<IDropdownPosition>(
      {
        top: undefined,
        bottom: undefined,
        left: 0,
        width: 0,
      },
    );
    const styles = useStyles(dropdownPosition);
    const dropdownAnimatingValue = useSharedValue(0);
    const onDropdownAnimationCallback = () => {
      if (!preVisible) {
        setVisible(false);
        onClose && onClose();
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
    const slideUpDropdownAnimatedStyles = useAnimatedStyle(
      () => ({
        height: interpolate(dropdownAnimatedValue.value, [0, 1], [0, 75]) + '%',
        paddingBottom: interpolate(
          dropdownAnimatedValue.value,
          [0, 1],
          [0, Platform.OS === 'ios' ? keyboardHeightIOS : 0],
        ),
      }),
      [keyboardHeightIOS],
    );
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
        setDropdownPosition({
          top: pageY > screenHeight / 2 ? undefined : pageY + height,
          bottom:
            pageY > screenHeight / 2 ? screenHeight - pageY - 30 : undefined,
          left: pageX,
          width,
        });
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
            containerStyle={styles.dropdownShadowContainer}
            distance={10}
            offset={[0, 6]}
            startColor="rgba(102, 112, 133, 0.15)"
            sides={{start: true, end: true, top: false, bottom: true}}
          >
            <View style={styles.dropdownInner}>{children}</View>
          </Shadow>
        </Animated.View>
      </Modal>
    );

    const renderSlideUpDropdown = () => (
      <Modal visible={visible} transparent animationType="none">
        <Pressable style={styles.grayOverlay} onPress={handleClose} />
        <Animated.View
          style={[
            styles.slideUpDropdown,
            slideUpDropdownAnimatedStyles,
            dropdownStyle,
          ]}
        >
          {children}
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
        {slideUp ? renderSlideUpDropdown() : renderDropdown()}
        {/*This block is used to keep the label in the same position when there are no text*/}
        {!placeholder && !value && <View style={styles.emptyBlock} />}
        {typeof value === 'string' || typeof value === 'undefined' ? (
          <Text
            variant={
              variant === 'floatingLabel' ? 'components1' : 'components2'
            }
            style={[
              styles.text,
              !!placeholder && styles.placeholderText,
              !!value && styles.valueText,
              disabled && styles.disabledText,
            ]}
          >
            {(!!value && validateInputValueLength(value)) || placeholder}
          </Text>
        ) : (
          value
        )}
      </LayoutComponent>
    );
  },
);

export default Dropdown;
