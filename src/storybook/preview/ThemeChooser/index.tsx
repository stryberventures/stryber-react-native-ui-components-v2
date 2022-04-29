import * as React from 'react';
import {ThemeProvider, useTheme} from '../../../components/Theme';
import Button from '../../../components/Button';
import {TouchableOpacity, View, Text} from 'react-native';
import {useStyles} from './styles';

const initTheme = {primary: {main: '#ea3590'}};

const themeVariants = [
  {primary: {main: '#ea3590'}},
  {primary: {main: '#757575'}},
  {primary: {main: '#4624bf'}},
  {primary: {main: '#a64825'}},
  {primary: {main: '#33acbb'}},
];

const ThemePreview = () => {
  const {theme, updateTheme} = useTheme();
  const styles = useStyles(theme);

  const renderThemeVariants = () =>
    themeVariants.map((themeVariant, i) => (
      <TouchableOpacity
        key={i}
        //eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: 50,
          height: 50,
          backgroundColor: themeVariant.primary.main,
          borderRadius: 5,
        }}
        onPress={() => updateTheme(themeVariant)}
      />
    ));

  return (
    <View style={styles.container}>
      <View style={styles.themeVariantWrapper}>{renderThemeVariants()}</View>
      <Button>Button</Button>
      <View style={styles.colorSelectorWrapper}>
        <Text>Current theme primary color:</Text>
        <View style={styles.themeColor} />
      </View>
    </View>
  );
};

const ThemeChooser = () => (
  <ThemeProvider initial={initTheme}>
    <ThemePreview />
  </ThemeProvider>
);

export default ThemeChooser;
