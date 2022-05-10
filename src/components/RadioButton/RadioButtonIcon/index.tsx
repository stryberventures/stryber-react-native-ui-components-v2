import React from 'react';
import useStyles from './styles';
import {View, ViewProps} from 'react-native';
import {CheckIcon} from '../../Icons';
import {IRadioButtonProps} from '../index';

const CHECK_ICON_SIZE = {
  medium: {width: 12, height: 10},
  small: {width: 8, height: 6},
};

interface IRadioButtonIconProps extends ViewProps {
  checked?: boolean;
  isPressed: boolean;
  variant?: IRadioButtonProps['variant'];
  size?: IRadioButtonProps['size'];
}

const RadioButtonIcon: React.FC<IRadioButtonIconProps> = ({
  isPressed,
  checked,
  variant = 'round',
  style,
  size = 'medium',
  ...rest
}) => {
  const styles = useStyles(size);

  const getIcon = () => {
    if (variant === 'check') {
      return <CheckIcon {...CHECK_ICON_SIZE[size]} />;
    }
    return <View style={styles.checkedIcon} />;
  };

  return (
    <View
      style={[
        styles.container,
        styles[size],
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

export default RadioButtonIcon;
