import React, {FC} from 'react';
import useStyles from './styles';
import {Modal, Pressable, ModalProps} from 'react-native';
import DialogTitle from './DialogTitle';
import DialogActions from './DialogActions';

export interface IDialogProps extends ModalProps {
  onCancel: () => void;
  open: boolean;
  cancelOnOutsidePress?: boolean;
}

export interface IDialogStaticProps {
  Title: typeof DialogTitle;
  Actions: typeof DialogActions;
}

const Dialog: FC<IDialogProps> & IDialogStaticProps = ({
  open,
  onCancel,
  cancelOnOutsidePress = true,
  children,
  ...rest
}) => {
  const styles = useStyles();
  return (
    <Modal transparent visible={open} {...rest}>
      <Pressable
        onPress={cancelOnOutsidePress ? onCancel : null}
        style={styles.overlay}
      >
        <Pressable style={styles.dialog}>{children}</Pressable>
      </Pressable>
    </Modal>
  );
};

Dialog.Title = DialogTitle;
Dialog.Actions = DialogActions;

export default Dialog;
