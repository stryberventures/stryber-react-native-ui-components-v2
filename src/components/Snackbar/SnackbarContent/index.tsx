import React from 'react';
import {View, ViewStyle, StyleProp, Pressable} from 'react-native';
import Text from '../../Text';
import * as Icons from '../../Icons';
import {useTheme} from '../../Theme';
import useStyles from './styles';

export interface ISnackbarContentProps {
  message?: string;
  description?: string;
  variant?: 'success' | 'error' | 'warning' | 'info' | 'default';
  onClose?: () => void;
  withIcon?: boolean;
  style?: StyleProp<ViewStyle>;
}

export const getColorFromVariant = (
  variant: ISnackbarContentProps['variant'],
) => {
  switch (variant) {
    case 'success':
    case 'error':
    case 'warning':
      return variant;
    case 'info':
      return 'primary';
    default:
      return null;
  }
};

const SnackbarContent: React.FC<ISnackbarContentProps> = ({
  message,
  variant = 'default',
  style,
  withIcon = true,
  description,
  onClose,
}) => {
  const {theme} = useTheme();
  const isDefault = variant === 'default';
  const color = getColorFromVariant(variant);

  const renderIcon = () => {
    const iconProps = {
      variant: 'filled' as const,
      fill: theme.colors[color!]?.dark600,
      testID: 'gaia-snackbar-icon',
    };
    switch (variant) {
      case 'success':
        return <Icons.CheckIcon {...iconProps} />;
      case 'error':
        return <Icons.ErrorIcon {...iconProps} />;
      case 'warning':
        return <Icons.WarningIcon {...iconProps} />;
      case 'info':
        return <Icons.InfoIcon {...iconProps} />;
      default:
        return null;
    }
  };

  const styles = useStyles(color);
  return (
    <View style={[styles.snackbarContent, style]}>
      {!isDefault && (
        <View style={styles.topIcons}>
          {withIcon && renderIcon()}
          {!!onClose && (
            <Pressable
              testID="gaia-snackbar-close-button"
              style={styles.closeIcon}
              onPress={onClose}
              hitSlop={5}
            >
              <Icons.CloseIcon
                fill={theme.colors[color!]?.dark600}
                width={20}
                height={20}
              />
            </Pressable>
          )}
        </View>
      )}
      <Text
        style={[styles.text, !!description && styles.withDescription]}
        variant="components2"
        weight="medium"
      >
        {message}
      </Text>
      <Text style={styles.text} variant="components2">
        {description}
      </Text>
    </View>
  );
};

export default SnackbarContent;
