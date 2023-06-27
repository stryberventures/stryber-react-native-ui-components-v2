import React from 'react';
import useStyles from './styles';
import {Image, ImageProps} from 'react-native';

interface IDialogImage extends ImageProps {}

const DialogImage: React.FC<IDialogImage> = ({style, ...rest}) => {
  const styles = useStyles();
  return <Image style={[styles.dialogImage, style]} {...rest} />;
};

export default DialogImage;
