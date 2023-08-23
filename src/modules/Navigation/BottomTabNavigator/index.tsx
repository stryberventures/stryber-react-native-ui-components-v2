import React from 'react';
import {View} from 'react-native';
import Text from '../../../components/Text';
import {useTheme} from '../../../components/Theme';
import * as Icons from '../../../components/Icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {vocab} from '../../../storybook/preview/i18n';

const Home = () => (
  <View>
    <Text>{vocab.modules.navigation.home}</Text>
  </View>
);

const Settings = () => (
  <View>
    <Text>{vocab.modules.navigation.settings}</Text>
  </View>
);

const Profile = () => (
  <View>
    <Text>{vocab.modules.navigation.profile}</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const {theme} = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.text.headline,
        tabBarInactiveTintColor: theme.colors.text.secondary,
        tabBarIconStyle: {width: 24, height: 24},
        tabBarItemStyle: {
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        },
        tabBarLabelStyle: {textAlign: 'center', marginLeft: 0, fontSize: 10},
      }}>
      <Tab.Screen
        name={vocab.modules.navigation.home}
        component={Home}
        options={{
          tabBarIcon: ({focused, color}) =>
            focused ? (
              <Icons.HomeIcon fill={color} variant="filled" />
            ) : (
              <Icons.HomeIcon fill={color} />
            ),
        }}
      />
      <Tab.Screen
        name={vocab.modules.navigation.profile}
        component={Profile}
        options={{
          tabBarIcon: ({focused, color}) =>
            focused ? (
              <Icons.HomeIcon fill={color} variant="filled" />
            ) : (
              <Icons.HomeIcon fill={color} />
            ),
        }}
      />
      <Tab.Screen
        name={vocab.modules.navigation.settings}
        component={Settings}
        options={{
          tabBarIcon: ({focused, color}) =>
            focused ? (
              <Icons.HomeIcon fill={color} variant="filled" />
            ) : (
              <Icons.HomeIcon fill={color} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
