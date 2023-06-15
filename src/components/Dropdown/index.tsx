import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';
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
    const [visible, setVisible] = useState(false);
    const [dropdownPosition, setDropdownPosition] = useState<IDropdownPosition>(
      {
        top: 0,
        left: 0,
        width: 0,
      },
    );
    const styles = useStyles(dropdownPosition);

    const handleOpen = (event?: GestureResponderEvent) => {
      dropdownInputRef.current!.measure((x, y, width, height, pageX, pageY) => {
        setDropdownPosition({top: pageY + height, left: pageX, width});
      });
      setVisible(true);
      onChange && onChange(true);
      onPress && onPress(event!);
    };

    const handleClose = () => {
      setVisible(false);
      onChange && onChange(false);
    };

    const renderDropdown = () => (
      <Modal visible={visible} transparent animationType="none">
        <Pressable style={styles.overlay} onPress={handleClose} />
        <View style={[styles.dropdown, dropdownStyle]}>
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
        </View>
      </Modal>
    );

    useImperativeHandle(ref, () => ({
      open: handleOpen,
      close: handleClose,
    }));

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
            <ArrowIcon
              variant="down"
              fill={
                disabled
                  ? theme.colors.neutralGray.medium300
                  : theme.colors.neutralGray.main500
              }
              style={[styles.icon, visible && styles.invertedIcon]}
            />
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
