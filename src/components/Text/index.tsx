import React from 'react';
import useStyles from './styles';
import {Text as RNText, TextProps} from 'react-native';

export interface ITextProps extends TextProps {
  align?: 'left' | 'center' | 'right';
  variant?:
    | 'body'
    | 'description'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'caption'
    | 'smallText'
    | 'footnote'
    | 'buttonLabel'
    | 'label'
    | 'labelHighlight';
}

const Text: React.FC<ITextProps> = ({
  style,
  children,
  variant = 'body',
  align = 'left',
  ...rest
}) => {
  const styles = useStyles();
  return (
    <RNText
      style={[styles.text, styles[variant], styles[align], style]}
      {...rest}
    >
      {children}
    </RNText>
  );
};

export default Text;
