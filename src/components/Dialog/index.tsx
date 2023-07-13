import React, {FC} from 'react';
import useStyles from './styles';
import {Modal, Pressable, ModalProps, ViewStyle, View} from 'react-native';
import DialogTitle from './DialogTitle';
import DialogText from './DialogText';
import DialogActions from './DialogActions';
import DialogImage from './DialogImage';

export interface IDialogProps extends ModalProps {
  onClose: () => void;
  open: boolean;
  disableOutsidePress?: boolean;
  overlayStyle?: ViewStyle;
}

export interface IDialogStaticProps {
  Title: typeof DialogTitle;
  Text: typeof DialogText;
  Actions: typeof DialogActions;
  Image: typeof DialogImage;
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
        style={[styles.overlay, overlayStyle]}>
        <Pressable style={[styles.dialog, style]}>
          <View>{children}</View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

Dialog.Title = DialogTitle;
Dialog.Text = DialogText;
Dialog.Actions = DialogActions;
Dialog.Image = DialogImage;

export default Dialog;
