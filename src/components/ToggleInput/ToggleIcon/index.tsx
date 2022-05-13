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
  variant: IToggleInputProps['variant'];
  iconVariant?: IToggleInputProps['iconVariant'];
  size?: IToggleInputProps['size'];
}

const ToggleIcon: React.FC<ToggleIconProps> = ({
  isPressed,
  checked,
  iconVariant = 'round',
  style,
  size = 'medium',
  variant,
  ...rest
}) => {
  const styles = useStyles(size);

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
        styles[size],
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
