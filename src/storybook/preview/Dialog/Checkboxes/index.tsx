import React from 'react';
import {View} from 'react-native';
import Dialog from '../../../../components/Dialog';
import Button from '../../../../components/Button';
import Checkbox from '../../../../components/Checkbox';
import {createUseStyles} from '../../../../components/Theme';
import {vocab} from '../../i18n';

const CheckboxesDialogExample = () => {
  const styles = useStyles();
  const [open, setOpen] = React.useState(false);
  const closeDialog = () => setOpen(false);

  return (
    <>
      <Button onPress={() => setOpen(true)}>
        {vocab.components.dialog.openDialog}
      </Button>
      <Dialog onClose={closeDialog} open={open}>
        <Dialog.Title>{vocab.components.dialog.title}</Dialog.Title>
        <Dialog.Text>{vocab.components.dialog.text}</Dialog.Text>
        <View style={styles.optionsBox}>
          <View style={styles.option}>
            <Checkbox label={vocab.components.dialog.label} />
          </View>
          <View style={styles.option}>
            <Checkbox label={vocab.components.dialog.label} />
          </View>
          <View style={styles.option}>
            <Checkbox label={vocab.components.dialog.label} />
          </View>
          <View style={styles.option}>
            <Checkbox label={vocab.components.dialog.label} />
          </View>
        </View>
        <Dialog.Actions>
          <Button variant="outlined" size="small" onPress={closeDialog}>
            {vocab.components.dialog.cancel}
          </Button>
          <Button size="small" onPress={closeDialog}>
            {vocab.components.dialog.confirm}
          </Button>
        </Dialog.Actions>
      </Dialog>
    </>
  );
};

const useStyles = createUseStyles({
  optionsBox: {
    marginVertical: 32,
  },
  option: {
    marginVertical: 8,
  },
});

export default CheckboxesDialogExample;

export const CheckboxesDialogExampleCode = `
  const CheckboxesDialogExample = (args: IDialogProps) => {
  const [open, setOpen] = React.useState(false);
  const closeDialog = () => setOpen(false);

  return (
    <>
      <Button onPress={() => setOpen(true)}>
        {vocab.components.dialog.openDialog}
      </Button>
      <Dialog onClose={closeDialog} open={open}>
        <Dialog.Title>{vocab.components.dialog.title}</Dialog.Title>
        <Dialog.Text>{vocab.components.dialog.text}</Dialog.Text>
        <View style={styles.optionsBox}>
          <View style={styles.option}>
            <Checkbox label={vocab.components.dialog.label} />
          </View>
          <View style={styles.option}>
            <Checkbox label={vocab.components.dialog.label} />
          </View>
          <View style={styles.option}>
            <Checkbox label={vocab.components.dialog.label} />
          </View>
          <View style={styles.option}>
            <Checkbox label={vocab.components.dialog.label} />
          </View>
        </View>
        <Dialog.Actions>
          <Button variant="outlined" size="small" onPress={closeDialog}>
            {vocab.components.dialog.cancel}
          </Button>
          <Button size="small" onPress={closeDialog}>
            {vocab.components.dialog.confirm}
          </Button>
        </Dialog.Actions>
      </Dialog>
    </>
  );
};
`;
