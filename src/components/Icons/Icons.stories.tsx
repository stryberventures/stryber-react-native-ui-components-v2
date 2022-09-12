import React from 'react';
import * as Icons from '.';
import CenterView from '../../storybook/preview/CenterView';
import {Platform, Text, View} from 'react-native';
import pkg from './package.json';

export default {
  title: 'Icons',
  decorators: Platform.OS === 'web' ? null : [CenterView],
  parameters: {
    pkg,
  },
};

export const AllIcons = () => {
  const getIconsArr = () => {
    const iconsArr = [];
    for (let key in Icons) {
      iconsArr.push({name: key, Icon: Icons[key as keyof typeof Icons]});
    }
    return iconsArr;
  };

  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 24, fontWeight: '700'}}>
        All Icons:
      </Text>
      {getIconsArr().map(({name, Icon}, index) => (
        <View
          key={index}
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            alignItems: 'center',
          }}
        >
          <Text>{name}: </Text>
          <Icon fill="#000" />
        </View>
      ))}
    </View>
  );
};
