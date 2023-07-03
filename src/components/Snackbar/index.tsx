import React, {useEffect} from 'react';
import useStyles from './styles';
import {Modal, SafeAreaView, Pressable} from 'react-native';
import SnackbarContent, {ISnackbarContentProps} from './SnackbarContent';

export interface ISnackbarProps extends ISnackbarContentProps {
  open?: boolean;
  onClose?: () => void;
  autoHideDuration?: number;
  position?: 'top' | 'center' | 'bottom';
}

const Snackbar: React.FC<ISnackbarProps> = ({
  open = false,
  autoHideDuration = 3000,
  position = 'top',
  onClose,
  ...rest
}) => {
  const timerAutoHide = React.useRef<ReturnType<typeof setTimeout>>();
  const styles = useStyles();

  const handleClose = () => {
    onClose && onClose();
    clearTimeout(timerAutoHide.current!);
  };

  useEffect(() => {
    if (open) {
      timerAutoHide.current = setTimeout(() => {
        handleClose();
      }, autoHideDuration);
    }
    return () => {
      clearTimeout(timerAutoHide.current!);
    };
  }, [open]);

  return (
    <Modal visible={open} animationType="fade" transparent>
      <SafeAreaView style={styles.snackbarOverlay}>
        <Pressable
          onPress={onClose}
          style={[styles.snackbarWrapper, styles[position]]}
        >
          <SnackbarContent {...rest} onClose={onClose} />
        </Pressable>
      </SafeAreaView>
    </Modal>
  );
};

export {SnackbarContent};

export default Snackbar;
