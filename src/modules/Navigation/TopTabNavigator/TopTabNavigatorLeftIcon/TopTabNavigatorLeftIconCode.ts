import {replacePaths} from '../../../../storybook/utils';

const code = `
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View} from 'react-native';
import Text from '../../../../components/Text';
import * as Icons from '../../../../components/Icons';
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

const TopTabNavigatorLeftIcon = () => {
  const {theme} = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary.dark600,
        tabBarInactiveTintColor: theme.colors.text.secondary,
        tabBarPressColor: theme.colors.primary.medium300,
        tabBarItemStyle: {
          paddingVertical: 14,
          flexDirection: 'row',
          alignItems: 'center',
        },
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
        tabBarIconStyle: {
          alignItems: 'center',
          justifyContent: 'center',
          width: 18,
          height: 18,
        },
        tabBarLabel: ({color, children}) => (
          <Text
            variant="components2"
            weight="medium"
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              color: color,
              marginLeft: 8,
            }}
          >
            {children}
          </Text>
        ),
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({color}) => (
            <Icons.HomeIcon width={18} height={18} fill={color} />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({color}) => (
            <Icons.HomeIcon width={18} height={18} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <Icons.HomeIcon width={18} height={18} fill={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TopTabNavigatorLeftIcon;
`;

export default replacePaths(code);
