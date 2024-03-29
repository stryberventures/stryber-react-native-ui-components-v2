import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Divider from '.';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
import {Platform, View} from 'react-native';
import pkg from './package.json';
import Text from '../Text';
import * as Icons from '../Icons';
import useStyles from './Divider.styles.stories';
import {vocab} from '../../storybook/preview/i18n';

export default {
  title: 'Components/Divider',
  component: Divider,
  decorators: Platform.OS === 'web' ? null : [CenterViewDecorator],
  parameters: {
    pkg,
    controls: {
      exclude: ['iconLeft', 'iconRight', 'style', 'textStyle'],
    },
  },
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = args => <Divider {...args} />;

export const Base = Template.bind({});

const ListItemExample = () => {
  const styles = useStyles();
  return (
    <View style={styles.listItem}>
      <Icons.ProfileCircleIcon variant="filled" style={styles.icon} />
      <Text>{vocab.components.divider.listItemText}</Text>
    </View>
  );
};

export const Examples = () => {
  const styles = useStyles();
  return (
    <View>
      <Text variant="body1" weight="semiBold" align="center">
        {vocab.components.divider.fullBleed}
      </Text>
      <ListItemExample />
      <Divider />
      <ListItemExample />
      <Divider />
      <ListItemExample />
      <Text variant="body1" weight="semiBold" align="center">
        {vocab.components.divider.middle}
      </Text>
      <ListItemExample />
      <Divider style={styles.middleDivider} />
      <ListItemExample />
      <Divider style={styles.middleDivider} />
      <ListItemExample />
      <Text variant="body1" weight="semiBold" align="center">
        {vocab.components.divider.inset}
      </Text>
      <ListItemExample />
      <Divider style={styles.insetDivider} />
      <ListItemExample />
      <Divider style={styles.insetDivider} />
      <ListItemExample />
    </View>
  );
};
