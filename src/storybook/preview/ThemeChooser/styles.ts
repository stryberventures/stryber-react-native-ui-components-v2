import {StyleSheet} from 'react-native';
import {ThemeType} from '../../../components/Theme';

export const useStyles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      justifyContent: 'space-around',
      height: '100%',
      paddingHorizontal: 20,
    },
    themeVariantWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    colorSelectorWrapper: {
      flexDirection: 'row',
    },
    themeColor: {
      backgroundColor: theme.primary.main,
      width: 20,
      height: 20,
      borderRadius: 5,
      marginLeft: 10,
    },
  });
