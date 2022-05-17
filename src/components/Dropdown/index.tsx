import React, {useRef, useState} from 'react';
import useStyles from './styles';
import {
  GestureResponderEvent,
  Modal,
  Pressable,
  Text,
  View,
} from 'react-native';
import BaseInputLayout, {IBaseInputLayoutProps} from '../Input/BaseInputLayout';
import {ArrowDownIcon} from '../Icons';
import {useTheme} from '../Theme';

export interface IDropdownProps extends IBaseInputLayoutProps {
  value?: string;
  placeholder?: string;
}

export interface IDropdownPosition {
  top: number;
  left: number;
  width: number;
}

const Dropdown: React.FC<IDropdownProps> = ({
  placeholder,
  value,
  onPress,
  disabled,
  children,
  ...rest
}) => {
  const {theme} = useTheme();
  const dropdownInputRef = useRef<View>(null);
  const [visible, setVisible] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState<IDropdownPosition>({
    top: 0,
    left: 0,
    width: 0,
  });
  const styles = useStyles(dropdownPosition);

  const openDropdown = (event: GestureResponderEvent) => {
    dropdownInputRef.current!.measure((x, y, width, height, pageX, pageY) => {
      setDropdownPosition({top: pageY + height, left: pageX, width});
    });
    setVisible(true);
    onPress && onPress(event);
  };

  const renderDropdown = () => (
    <Modal visible={visible} transparent animationType="none">
      <Pressable style={styles.overlay} onPress={() => setVisible(false)} />
      <View style={styles.dropdown}>{children}</View>
    </Modal>
  );

  return (
    <BaseInputLayout
      isFocused={visible}
      ref={dropdownInputRef}
      onPress={openDropdown}
      rightContent={
        <ArrowDownIcon
          fill={disabled ? theme.divider.main : undefined}
          style={[styles.icon, visible && styles.invertedIcon]}
        />
      }
      disabled={disabled}
      {...rest}
    >
      {renderDropdown()}
      <Text
        style={[
          !!placeholder && styles.placeholderText,
          !!value && styles.valueText,
          disabled && styles.disabledText,
        ]}
      >
        {value || placeholder}
      </Text>
    </BaseInputLayout>
  );
};

export default Dropdown;
