import React, {useEffect, useRef, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, Pressable, Animated, LayoutChangeEvent} from 'react-native';
import Text from '../../../../components/Text';
import {createUseStyles} from '../../../../components/Theme';
import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';
import {ParamListBase, TabNavigationState} from '@react-navigation/native';

const TAB_INDICATOR_MARGIN = 2;

const useStyles = createUseStyles(theme => ({
  container: {
    flexDirection: 'row',
    backgroundColor: '#EFF1F3',
    borderRadius: 8.91,
    marginVertical: 20,
    marginHorizontal: 32,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    lineHeight: 18,
    paddingVertical: 8,
    fontWeight: '400',
    color: '#000',
  },
  tabBarIndicator: {
    position: 'absolute',
    bottom: TAB_INDICATOR_MARGIN,
    backgroundColor: theme.colors.background.white,
    borderWidth: 0.5,
    borderColor: theme.colors.background.extraLightGrey,
    borderRadius: 6.93,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
}));

interface ITopTabsProps extends MaterialTopTabBarProps {}

interface ITabBarIndicatorProps {
  state: TabNavigationState<ParamListBase>;
  tabBarSize: {width: number; height: number};
}

const TabBarIndicator: React.FC<ITabBarIndicatorProps> = ({
  state,
  tabBarSize,
}) => {
  const translateAnim = useRef(new Animated.Value(TAB_INDICATOR_MARGIN))
    .current;
  const itemsCount = state.routes.length;
  const itemWidth = tabBarSize.width / itemsCount - TAB_INDICATOR_MARGIN;
  const indicatorMargin =
    TAB_INDICATOR_MARGIN * state.index || TAB_INDICATOR_MARGIN;
  const styles = useStyles();

  const slide = () => {
    Animated.timing(translateAnim, {
      toValue: state.index * itemWidth + indicatorMargin,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    slide();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <Animated.View
      style={[
        styles.tabBarIndicator,
        {
          height: tabBarSize.height - TAB_INDICATOR_MARGIN * 2,
          width: itemWidth,
          transform: [{translateX: translateAnim}],
        },
      ]}
    />
  );
};

const TopTabBar: React.FC<ITopTabsProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const [tabBarSize, setTabBarSize] = useState({width: 0, height: 0});
  const styles = useStyles();
  const handleLayout = (e: LayoutChangeEvent) => {
    const {width, height} = e.nativeEvent.layout;
    setTabBarSize({width, height});
  };

  return (
    <View style={styles.container} onLayout={handleLayout}>
      <TabBarIndicator tabBarSize={tabBarSize} state={state} />
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            // @ts-ignore
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tab}
            key={index}
          >
            <Text variant="components2" style={styles.tabText}>
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

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

const TopTabNavigatorIosStyle = () => {
  return (
    <Tab.Navigator tabBar={props => <TopTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TopTabNavigatorIosStyle;
