import React from 'react';
import {ComponentMeta} from '@storybook/react-native';
import Dialog from '.';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
import pkg from './package.json';
import BasicDialogExample, {
  BasicDialogExampleCode,
} from '../../storybook/preview/Dialog/Basic';
import ShrunkDialogExample, {
  ShrunkDialogExampleCode,
} from '../../storybook/preview/Dialog/Shrunk';
import CenterDialogExample, {
  CenterDialogExampleCode,
} from '../../storybook/preview/Dialog/Center';
import ImageDialogExample, {
  ImageDialogExampleCode,
} from '../../storybook/preview/Dialog/Image';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  decorators: [CenterViewDecorator],
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof Dialog>;

export const BasicExample = () => <BasicDialogExample />;
BasicExample.parameters = {
  docs: {
    source: {
      code: BasicDialogExampleCode,
    },
  },
};

export const ShrunkExample = () => <ShrunkDialogExample />;
ShrunkExample.parameters = {
  docs: {
    source: {
      code: ShrunkDialogExampleCode,
    },
  },
};

export const CenterExample = () => <CenterDialogExample />;
CenterExample.parameters = {
  docs: {
    source: {
      code: CenterDialogExampleCode,
    },
  },
};

export const ImageExample = () => <ImageDialogExample />;
ImageExample.parameters = {
  docs: {
    source: {
      code: ImageDialogExampleCode,
    },
  },
};
