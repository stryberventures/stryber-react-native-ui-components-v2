import React from 'react';
import useStyles from './styles';
import {View, ViewProps} from 'react-native';
import {CheckIconDeprecated} from '../../Icons';
import {IToggleInputProps} from '../index';
import {useTheme} from '../../Theme';

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
  disabled?: boolean;
}

const ToggleIcon: React.FC<ToggleIconProps> = ({
  isPressed,
  color = 'primary',
  checked,
  iconVariant = 'round',
  style,
  size = 'medium',
  variant,
  disabled,
  ...rest
}) => {
  const {theme} = useTheme();
  const styles = useStyles(size, color);

  const getIcon = () => {
    if (iconVariant === 'check') {
      return (
        <CheckIconDeprecated
          {...CHECK_ICON_SIZE[size]}
          fill={
            disabled ? theme.colors[color].main500 : theme.colors.contrast.white
          }
        />
      );
    }
    return (
      <View style={[styles.checkedIcon, disabled && styles.disabledIcon]} />
    );
  };

  return (
    <View
      style={[
        styles.container,
        styles[variant],
        isPressed && !checked && styles.pressed,
        checked && styles.checked,
        isPressed && checked && styles.pressedChecked,
        disabled && styles.disabled,
        style,
      ]}
      {...rest}
    >
      {checked && getIcon()}
    </View>
  );
};

export default ToggleIcon;
