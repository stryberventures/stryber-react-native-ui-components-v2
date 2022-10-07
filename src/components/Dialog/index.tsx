import React from 'react';
import useStyles from './styles';
import {Modal, Pressable, View, Text, ModalProps} from 'react-native';
import DialogButton from './DialogButton';

export interface IDialogProps extends ModalProps {
  title?: string;
  text?: string | React.ReactElement;
  onCancel: () => void;
  onConfirm: () => void;
  cancelButtonText?: string;
  confirmButtonText?: string;
  open: boolean;
  cancelOnOutsidePress?: boolean;
}

const Dialog: React.FC<IDialogProps> = ({
  title,
  text,
  open,
  onCancel,
  onConfirm,
  cancelButtonText = 'Cancel',
  confirmButtonText = 'Ok',
  cancelOnOutsidePress = true,
  ...rest
}) => {
  const styles = useStyles();
  return (
    <Modal transparent visible={open} {...rest}>
      <Pressable
        onPress={cancelOnOutsidePress ? onCancel : null}
        style={styles.overlay}
      >
        <Pressable style={styles.dialog}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{text}</Text>
          <View style={styles.buttonWrapper}>
            <DialogButton onPress={onConfirm}>{confirmButtonText}</DialogButton>
            <DialogButton onPress={onCancel} style={styles.cancelButton}>
              {cancelButtonText}
            </DialogButton>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default Dialog;
