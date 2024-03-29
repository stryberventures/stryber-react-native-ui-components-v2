import React from 'react';
import useStyles from './styles';
import {Text as RNText, TextProps} from 'react-native';
import {useTheme, defaultTheme} from '../Theme';

export interface ITextProps extends TextProps {
  align?: 'left' | 'center' | 'right';
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'caption1'
    | 'caption2'
    | 'components1'
    | 'components2'
    | 'components3'
    | 'buttonLabelMini'
    | 'buttonLabelLarge';
  weight?: 'regular' | 'medium' | 'semiBold' | 'bold';
  color?: keyof typeof defaultTheme.colors.text;
}

const Text: React.FC<ITextProps> = ({
  style,
  children,
  variant = 'body2',
  align = 'left',
  weight = 'regular',
  color = 'headline',
  ...rest
}) => {
  const {theme} = useTheme();
  const styles = useStyles();
  return (
    <RNText
      style={[
        styles.text,
        styles[variant],
        styles[align],
        styles[weight],
        {color: theme.colors.text[color]},
        style,
      ]}
      {...rest}>
      {children}
    </RNText>
  );
};

export default Text;
