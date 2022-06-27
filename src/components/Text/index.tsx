import React from 'react';
import useStyles from './styles';
import {Text as RNText, TextProps} from 'react-native';

interface ITextProps extends TextProps {}

const Text: React.FC<ITextProps> = ({style, children, ...rest}) => {
  const styles = useStyles();
  return (
    <RNText style={[styles.text, style]} {...rest}>
      {children}
    </RNText>
  );
};

export default Text;
