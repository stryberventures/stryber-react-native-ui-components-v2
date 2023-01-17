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
import {useTheme} from '../Theme';

export interface ITextLinkProps extends PressableProps {
  variant?: 'body1' | 'body2' | 'body3';
  visited?: boolean;
  color?: 'primary' | 'secondary';
  disabled?: boolean;
  iconLeft?: React.FC<any>;
  iconRight?: React.FC<any>;
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
  variant = 'body2',
  visited = false,
  children,
  ...rest
}) => {
  const {theme} = useTheme();
  const styles = useStyles(color);

  const getTextColor = (pressed: boolean) =>
    disabled
      ? theme.colors[color].light200
      : pressed
      ? theme.colors[color].medium300
      : visited
      ? theme.colors[color].dark600
      : theme.colors[color].main500;

  const renderIcon = (
    position: 'leftIcon' | 'rightIcon',
    pressed: boolean,
    Icon?: React.FC<any>,
  ) =>
    Icon && (
      <View style={styles[position]}>
        <Icon fill={getTextColor(pressed)} />
      </View>
    );

  return (
    <Pressable style={[styles.container, style]} disabled={disabled} {...rest}>
      {({pressed}) => (
        <>
          {renderIcon('leftIcon', pressed, iconLeft)}
          <Text
            variant={variant}
            style={[
              {color: getTextColor(pressed)},
              pressed && styles.pressedText,
              textStyle,
            ]}
          >
            {children}
          </Text>
          {renderIcon('rightIcon', pressed, iconRight)}
        </>
      )}
    </Pressable>
  );
};

export default TextLink;
