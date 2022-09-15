import React from 'react';
import RNRestart from 'react-native-restart';
import * as Icons from '.';
import CenterView from '../../storybook/preview/CenterView';
import {Platform, Text, View, I18nManager} from 'react-native';
import Button from '../Button';
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

  const toggleRTL = async () => {
    await I18nManager.forceRTL(false);
    RNRestart.Restart();
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
      <Button onPress={toggleRTL}>Turn on RTL</Button>
    </View>
  );
};
