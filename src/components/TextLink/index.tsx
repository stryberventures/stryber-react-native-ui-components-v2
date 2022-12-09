import React from 'react';
import useStyles from './styles';
import {
  View,
  PressableProps,
  StyleProp,
  ViewStyle,
  Pressable,
  TextStyle,
} from 'react-native';
import Text from '../Text';

export interface ITextLinkProps extends PressableProps {
  color?: 'primary' | 'secondary';
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const TextLink: React.FC<ITextLinkProps> = ({
  textStyle,
  disabled,
  iconLeft,
  iconRight,
  style,
  color = 'primary',
  children,
  ...rest
}) => {
  const styles = useStyles(color);
  const renderIcon = (
    position: 'leftIcon' | 'rightIcon',
    icon?: React.ReactNode,
  ) => icon && <View style={styles[position]}>{icon}</View>;

  return (
    <Pressable
      style={({pressed}) => [
        styles.container,
        pressed && styles.pressedContainer,
        disabled && styles.disabled,
        style,
      ]}
      disabled={disabled}
      {...rest}
    >
      {renderIcon('leftIcon', iconLeft)}
      <Text
        variant="components1"
        weight="bold"
        style={[styles.text, textStyle]}
      >
        {children}
      </Text>
      {renderIcon('rightIcon', iconRight)}
    </Pressable>
  );
};

export default TextLink;
