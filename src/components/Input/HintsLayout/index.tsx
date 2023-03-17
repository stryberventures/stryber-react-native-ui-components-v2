import React from 'react';
import useStyles from './styles';
import HintMessage from '../../HintMessage';
import ErrorMessage from '../../ErrorMessage';
import {StyleProp, TextStyle, View, ViewStyle} from 'react-native';

interface IHintLayoutProps {
  error?: string;
  hint?: string;
  showLength?: boolean;
  disabled?: boolean;
  hintStyle?: StyleProp<TextStyle>;
  errorStyle?: StyleProp<ViewStyle>;
  maxValueLength?: number;
  currentValueLength?: number;
}

const HintsLayout: React.FC<IHintLayoutProps> = props => {
  const {
    error,
    hint,
    showLength,
    disabled,
    hintStyle,
    errorStyle,
    maxValueLength,
    currentValueLength,
  } = props;
  const styles = useStyles();

  return (
    <View style={[styles.hintsContainer, !error && !hint && styles.lengthOnly]}>
      {!!hint && !error && (
        <HintMessage
          message={hint}
          disabled={disabled}
          style={[styles.message, hintStyle]}
        />
      )}
      {!!error && (
        <ErrorMessage error={error} style={[styles.message, errorStyle]} />
      )}
      {!!showLength && (
        <HintMessage
          message={
            maxValueLength
              ? `${currentValueLength} / ${maxValueLength}`
              : `${currentValueLength}`
          }
          disabled={disabled}
          numberOfLines={1}
        />
      )}
    </View>
  );
};

export default HintsLayout;
