import React from 'react';
import useStyles from './styles';
import {Modal, Pressable, View, Text} from 'react-native';
import DialogButton from './DialogButton';

export interface IDialogProps {
  title?: string;
  subtitle?: string;
  onClose: () => void;
  open: boolean;
  closeOnTouchOutside?: boolean;
}

const Dialog: React.FC<IDialogProps> = ({
  title,
  subtitle,
  open,
  onClose,
  closeOnTouchOutside = true,
}) => {
  const styles = useStyles();
  return (
    <Modal transparent visible={open}>
      <Pressable
        onPress={closeOnTouchOutside ? onClose : null}
        style={styles.overlay}
      >
        <Pressable style={styles.dialog}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <View style={styles.buttonWrapper}>
            <DialogButton>Ok</DialogButton>
            <DialogButton onPress={onClose} style={styles.cancelButton}>
              Discard
            </DialogButton>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default Dialog;
