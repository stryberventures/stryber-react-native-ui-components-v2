import React from 'react';
import useStyles from './styles';
import {StyleProp, View, ViewStyle} from 'react-native';
import Text from '../../Text';

interface IListItemTextProps {
  label?: string;
  primary: string;
  secondary?: string;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

const ListItemText: React.FC<IListItemTextProps> = ({
  label,
  primary,
  secondary,
  style,
  disabled,
}) => {
  const styles = useStyles();
  return (
    <View style={style}>
      {!!label && (
        <Text
          variant="caption1"
          style={[styles.label, disabled && styles.disabled]}
        >
          {label}
        </Text>
      )}
      <Text
        variant="components1"
        weight="medium"
        style={[styles.title, disabled && styles.disabled]}
      >
        {primary}
      </Text>
      {!!secondary && (
        <Text
          variant="components2"
          style={[styles.subtitle, disabled && styles.disabled]}
        >
          {secondary}
        </Text>
      )}
    </View>
  );
};

export default ListItemText;
