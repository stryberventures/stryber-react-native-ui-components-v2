import React from 'react';
import {View} from 'react-native';

import Text from '../../Text';
import Checkbox, {ICheckboxProps} from '../../Checkbox';
import useStyles from './styles';

export interface IMultiselectOption extends Omit<ICheckboxProps, 'label'> {
  label: string;
  icon?: React.ReactNode;
}

const MultiselectOption: React.FC<IMultiselectOption> = ({
  label,
  icon,
  color,
}) => {
  const styles = useStyles();
  const checkboxLabel = (
    <View style={styles.container}>
      {!!icon && <View style={styles.iconContainer}>{icon}</View>}
      <Text style={styles.checkboxText}>{label}</Text>
    </View>
  );

  return (
    <Checkbox
      color={color}
      key={label}
      label={checkboxLabel}
      labelStyle={styles.checkboxText}
      name={label}
      style={styles.multiselectItem}
      pressedStyle={styles.multiselectItemPressed}
    />
  );
};

export default MultiselectOption;
