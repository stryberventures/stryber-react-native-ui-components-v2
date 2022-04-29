import React, {useState} from 'react';
import useStyles from './styles';
import {
  Text,
  Pressable,
  PressableProps,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';
import HintMessage from '../../HintMessage';
import ErrorMessage from '../../ErrorMessage';

export interface IBaseInputLayoutProps extends PressableProps {
  label?: string;
  isFocused?: boolean;
  style?: StyleProp<ViewStyle>;
  wrapperStyle?: StyleProp<ViewStyle>;
  error?: string;
  disabled?: boolean;
  hint?: string;
}

export interface IInputSize {
  width: number;
  height: number;
}

const BaseInputLayout: React.FC<IBaseInputLayoutProps> = ({
  children,
  label,
  isFocused,
  error,
  style,
  wrapperStyle,
  disabled,
  hint,
  ...rest
}) => {
  const [inputSize, setInputSize] = useState<IInputSize>({
    width: 0,
    height: 0,
  });
  const styles = useStyles(inputSize);
  return (
    <View style={style}>
      <Pressable
        style={[
          styles.baseInput,
          isFocused && styles.baseInputFocused,
          !!error && styles.error,
          disabled && styles.disabled,
          wrapperStyle,
        ]}
        onLayout={e => {
          const {layout} = e.nativeEvent;
          setInputSize(layout);
        }}
        {...rest}
      >
        {!!error && <View style={styles.errorLine} />}
        <Text style={[styles.label, disabled && styles.disabledLabel]}>
          {label}
        </Text>
        {children}
      </Pressable>
      {isFocused && (
        <View
          style={[styles.focusedOutline, !!error && styles.errorFocusedOutline]}
        />
      )}
      <HintMessage message={hint} disabled={disabled} />
      <ErrorMessage error={error} />
    </View>
  );
};

export default BaseInputLayout;
