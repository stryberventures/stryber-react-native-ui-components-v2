import React from 'react';
import useStyles from './styles';
import {View, Text} from 'react-native';

export interface IDialogProps {
  title?: string;
  subtitle?: string;
  onClose: () => void;
  open: boolean;
}

const Dialog: React.FC<IDialogProps> = ({}) => {
  const styles = useStyles();
  return (
    <View>
      <Text>Test</Text>
    </View>
  );
};

export default Dialog;
