import {Platform} from 'react-native';

export const defaultTheme = {
  //Will apply default font for ios and android(San Francisco on iOS and Roboto on Android)
  //Change this font in your project to apply changes on all components
  //Inter by default only available for web. To add it to RN project:
  //More info: https://github.com/stryberventures/stryber-react-native-ui-components-v2/wiki/2.-Theme#setup-font
  fontFamily: Platform.OS === 'web' ? 'Inter, sans-serif' : 'System',
  background: {
    main: '#FFF',
    disabled: '#FCFCFD',
  },
  default: {
    dark: '#667085',
    main: '#C7CCD3',
    light: '#E4E7EC',
    extraLight: '#EFF1F3',
  },
  primary: {
    main: '#003CB8',
    light: '#E7EAF9',
    dark: '#001D9A',
    contrast: '#FFF',
  },
  secondary: {
    main: '#58329A',
    light: '#EDE7F4',
    dark: '#3D2181',
    contrast: '#FFF',
  },
  success: {
    main: '#6CA78B',
    contrast: '#fff',
  },
  text: {
    primary: '#000000',
    secondary: '#344054',
    disabled: '#D2D2D2',
    hint: '#667085',
  },
  error: {
    main: '#EC726B',
    light: '#FBDCDA',
    dark: '#D92C20',
    contrast: '#000',
  },
  spacing: {
    2: 2,
    4: 4,
    8: 8,
    12: 12,
    16: 16,
    24: 24,
    32: 32,
    40: 40,
    48: 48,
    64: 64,
    80: 80,
    96: 96,
    160: 160,
  },
};
