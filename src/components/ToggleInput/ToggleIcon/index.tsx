import React from 'react';
import useStyles from './styles';
import {View, ViewProps} from 'react-native';
import {IToggleInputProps} from '../index';
import {useTheme} from '../../Theme';
import {CheckIcon} from '../../Icons';

export interface ToggleIconProps extends ViewProps {
  checked?: boolean;
  indeterminate?: boolean;
  isPressed: boolean;
  variant: 'radio' | 'checkbox';
  iconVariant?: IToggleInputProps['iconVariant'];
  color?: 'primary' | 'secondary';
  disabled?: boolean;
  error?: string;
}

const ToggleIcon: React.FC<ToggleIconProps> = ({
  isPressed,
  color = 'primary',
  checked,
  iconVariant = 'round',
  style,
  variant,
  disabled,
  indeterminate,
  error,
  ...rest
}) => {
  const {theme} = useTheme();
  const styles = useStyles(color);

  const getIcon = () => {
    if (iconVariant === 'check') {
      return (
        <CheckIcon width={17} height={17} fill={theme.colors.contrast.white} />
      );
    }
    return <View style={[styles.checkedIcon]} />;
  };

  return (
    <View
      style={[
        styles.container,
        styles[variant],
        isPressed && !checked && styles.pressed,
        (checked || indeterminate) && styles.checked,
        isPressed && checked && styles.pressedChecked,
        !!error && styles.error,
        (checked || indeterminate) && !!error && styles.errorChecked,
        disabled && styles.disabled,
        disabled && checked && styles.checkedDisabled,
        style,
      ]}
      {...rest}
    >
      {checked && getIcon()}
      {indeterminate && <View style={styles.indeterminate} />}
    </View>
  );
};

export default ToggleIcon;
