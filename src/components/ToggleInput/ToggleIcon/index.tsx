import React from 'react';
import useStyles from './styles';
import {View, ViewProps} from 'react-native';
import {CheckIcon} from '../../Icons';
import {IToggleInputProps} from '../index';

const CHECK_ICON_SIZE = {
  medium: {width: 12, height: 10},
  small: {width: 8, height: 6},
};

export interface ToggleIconProps extends ViewProps {
  checked?: boolean;
  isPressed: boolean;
  variant: 'radio' | 'checkbox';
  iconVariant?: IToggleInputProps['iconVariant'];
  size?: IToggleInputProps['size'];
  color?: 'primary' | 'secondary';
}

const ToggleIcon: React.FC<ToggleIconProps> = ({
  isPressed,
  color = 'primary',
  checked,
  iconVariant = 'round',
  style,
  size = 'medium',
  variant,
  ...rest
}) => {
  const styles = useStyles(size, color);

  const getIcon = () => {
    if (iconVariant === 'check') {
      return <CheckIcon {...CHECK_ICON_SIZE[size]} />;
    }
    return <View style={styles.checkedIcon} />;
  };

  return (
    <View
      style={[
        styles.container,
        styles[variant],
        isPressed && !checked && styles.pressed,
        checked && styles.checked,
        isPressed && checked && styles.pressedChecked,
        style,
      ]}
      {...rest}
    >
      {checked && getIcon()}
    </View>
  );
};

export default ToggleIcon;
