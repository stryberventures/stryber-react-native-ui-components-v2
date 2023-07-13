import React, {useEffect, useRef} from 'react';
import useStyles from './styles';
import {View, Animated} from 'react-native';
import {ToggleIconProps} from '../ToggleIcon';
import Elevation from '../../Elevation';

interface ISwitchIconProps extends Omit<ToggleIconProps, 'variant'> {}

const SwitchIcon: React.FC<ISwitchIconProps> = ({
  isPressed,
  checked,
  color = 'primary',
  disabled,
}) => {
  const toggleAnim = useRef(new Animated.Value(checked ? 1 : 0)).current;
  const styles = useStyles(color);

  const runAnimation = () => {
    const animValue = {
      fromValue: checked ? 0 : 1,
      toValue: checked ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    };
    Animated.timing(toggleAnim, animValue).start();
  };

  useEffect(() => {
    runAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  return (
    <View
      style={[
        styles.container,
        isPressed && !checked && styles.pressedUncheckedContainer,
        checked && styles.checked,
        isPressed && checked && styles.pressedCheckedContainer,
        disabled && styles.disabled,
      ]}>
      <Animated.View
        style={[
          {
            left: toggleAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 20],
            }),
          },
        ]}>
        {disabled ? (
          <View style={styles.circle} />
        ) : (
          <Elevation
            variant="light"
            style={styles.borderRadius}
            childShadowStyle={styles.borderRadius}>
            <View style={styles.circle} />
          </Elevation>
        )}
      </Animated.View>
    </View>
  );
};

export default SwitchIcon;
