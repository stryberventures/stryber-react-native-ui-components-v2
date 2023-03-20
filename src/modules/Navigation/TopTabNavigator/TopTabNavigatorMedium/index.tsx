import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View} from 'react-native';
import Text from '../../../../components/Text';
import {useTheme} from '../../../../components/Theme';

const Tab = createMaterialTopTabNavigator();

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

const TopTabNavigatorMedium = () => {
  const {theme} = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary.dark600,
        tabBarInactiveTintColor: theme.colors.text.secondary,
        tabBarPressColor: theme.colors.primary.medium300,
        tabBarItemStyle: {paddingVertical: 18.5},
        tabBarStyle: {
          borderBottomWidth: 1,
          borderColor: theme.colors.neutralGray.light200,
        },
        tabBarIndicatorStyle: {
          height: 2,
          backgroundColor: theme.colors.primary.dark600,
          borderRadius: 2,
          marginBottom: -1,
        },
        tabBarLabel: ({color, children}) => (
          <Text
            variant="components1"
            weight="medium"
            style={{
              color: color,
            }}
          >
            {children}
          </Text>
        ),
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TopTabNavigatorMedium;
