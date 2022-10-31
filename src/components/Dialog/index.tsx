import React, {FC} from 'react';
import useStyles from './styles';
import {Modal, Pressable, ModalProps, ViewStyle} from 'react-native';
import DialogTitle from './DialogTitle';
import DialogActions from './DialogActions';

export interface IDialogProps extends ModalProps {
  onClose: () => void;
  open: boolean;
  disableOutsidePress?: boolean;
  overlayStyle?: ViewStyle;
}

export interface IDialogStaticProps {
  Title: typeof DialogTitle;
  Actions: typeof DialogActions;
}

const Dialog: FC<IDialogProps> & IDialogStaticProps = ({
  open,
  onClose,
  disableOutsidePress = false,
  style,
  overlayStyle,
  children,
  ...rest
}) => {
  const styles = useStyles();
  return (
    <Modal transparent visible={open} {...rest}>
      <Pressable
        onPress={!disableOutsidePress ? onClose : null}
        style={[styles.overlay, overlayStyle]}
      >
        <Pressable style={[styles.dialog, style]}>{children}</Pressable>
      </Pressable>
    </Modal>
  );
};

Dialog.Title = DialogTitle;
Dialog.Actions = DialogActions;

export default Dialog;
