import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {Pressable, View} from 'react-native';
import * as Icons from '../../../../components/Icons';
import Text from '../../../../components/Text';
import {useTheme, createUseStyles} from '../../../../components/Theme';
import {vocab} from '../../../../storybook/preview/i18n';

const useStyles = createUseStyles(theme => ({
  itemsWrapper: {
    borderLeftWidth: 1,
    borderColor: theme.colors.neutralGray.light200,
    marginLeft: 20,
  },
  drawerItem: {
    paddingVertical: 15,
    paddingHorizontal: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawerItemTextWithIcon: {
    marginLeft: 16,
  },
  activeIndicator: {
    position: 'absolute',
    width: 2,
    borderRadius: 2,
    height: '100%',
    left: -1,
    backgroundColor: theme.colors.primary.dark600,
  },
}));

interface ICustomDrawerProps extends DrawerContentComponentProps {}

const CustomDrawer: React.FC<ICustomDrawerProps> = props => {
  const {state, descriptors, navigation} = props;
  const {theme} = useTheme();
  const styles = useStyles();
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.itemsWrapper}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.drawerLabel !== undefined
              ? options.drawerLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;
          const isWithIcon = !!options.drawerIcon;
          const renderIcon = (pressed: boolean) =>
            isWithIcon &&
            options.drawerIcon!({
              focused: isFocused,
              color: getColor(pressed),
              size: 18,
            });

          const onPress = () => {
            const event = navigation.emit({
              type: 'drawerItemPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the drawer screen are preserved
              // @ts-ignore
              navigation.navigate({name: route.name, merge: true});
            }
          };

          const getColor = (pressed: boolean) => {
            return isFocused
              ? theme.colors.primary.dark600
              : pressed
              ? theme.colors.primary.medium300
              : theme.colors.text.secondary;
          };

          return (
            <View key={index}>
              {isFocused && <View style={styles.activeIndicator} />}
              <Pressable
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                onPress={onPress}
                style={[styles.drawerItem]}
              >
                {({pressed}) => (
                  <>
                    {renderIcon(pressed)}
                    <Text
                      variant="components2"
                      weight="medium"
                      style={[
                        {color: getColor(pressed)},
                        isWithIcon && styles.drawerItemTextWithIcon,
                      ]}
                    >
                      {label}
                    </Text>
                  </>
                )}
              </Pressable>
            </View>
          );
        })}
      </View>
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator();

const Home = () => (
  <View>
    <Text>{vocab.modules.navigation.home}</Text>
  </View>
);

const Info = () => (
  <View>
    <Text>{vocab.modules.navigation.info}</Text>
  </View>
);

const Profile = () => (
  <View>
    <Text>{vocab.modules.navigation.profile}</Text>
  </View>
);

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{drawerStyle: {width: 240}}}
      defaultStatus="open"
      drawerContent={props => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name={vocab.modules.navigation.home}
        component={Home}
        options={{
          drawerIcon: ({size, color}) => (
            <Icons.HomeIcon fill={color} width={size} height={size} />
          ),
        }}
      />
      <Drawer.Screen
        name={vocab.modules.navigation.info}
        component={Info}
        options={{
          drawerIcon: ({size, color}) => (
            <Icons.InfoIcon fill={color} width={size} height={size} />
          ),
        }}
      />
      <Drawer.Screen
        name={vocab.modules.navigation.profile}
        component={Profile}
        options={{
          drawerIcon: ({size, color}) => (
            <Icons.ProfileIcon fill={color} width={size} height={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
