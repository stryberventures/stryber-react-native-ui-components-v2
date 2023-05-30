import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View} from 'react-native';
import Text from '../../../../components/Text';
import * as Icons from '../../../../components/Icons';
import {useTheme} from '../../../../components/Theme';
import {vocab} from '../../../../storybook/preview/i18n';

const Tab = createMaterialTopTabNavigator();

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
          flexDirection: 'row-reverse',
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
              marginRight: 8,
            }}
          >
            {children}
          </Text>
        ),
      }}
    >
      <Tab.Screen
        name={vocab.modules.navigation.home}
        options={{
          tabBarIcon: ({color}) => (
            <Icons.HomeIcon width={18} height={18} fill={color} />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name={vocab.modules.navigation.settings}
        component={Settings}
        options={{
          tabBarIcon: ({color}) => (
            <Icons.HomeIcon width={18} height={18} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name={vocab.modules.navigation.profile}
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
