import React from 'react';
import {View} from 'react-native';
import Text from '../../../components/Text';
import {useTheme} from '../../../components/Theme';
import * as Icons from '../../../components/Icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Home = () => (
  <View>
    <Text>Home</Text>
  </View>
);

const Settings = () => (
  <View>
    <Text>Settings</Text>
  </View>
);

const Profile = () => (
  <View>
    <Text>Profile</Text>
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
      }}
    >
      <Tab.Screen
        name="Home"
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
        name="Profile"
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
        name="Settings"
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
