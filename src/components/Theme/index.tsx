import React, {useCallback, useContext, useState} from 'react';
import {StyleSheet, I18nManager} from 'react-native';

import {merge} from '../../utils/deepMerge';

import {defaultTheme} from './defaultTheme';
import {useEffectAfterMount} from '../../hooks/useEffectAfterMount';

declare global {
  namespace DesignSystem {
    interface IProjectTheme {}
  }
}

export type ThemeType = typeof defaultTheme & DesignSystem.IProjectTheme;

interface IThemeContext {
  theme: ThemeType;
  updateTheme: (updatedTheme: Object) => void;
}

export interface IThemeProvider {
  theme: Object;
  children?: React.ReactNode;
}

export const isRTL = I18nManager.isRTL;

const Context = React.createContext<IThemeContext>({
  theme: defaultTheme,
  updateTheme: () => console.log('ThemeProvider is not rendered yet'),
});

export const ThemeProvider = React.memo<IThemeProvider>(
  ({theme: initialTheme, children}) => {
    const [theme, setTheme] = useState(merge(defaultTheme, initialTheme));

    const updateThemeCallback = useCallback(<T,>(updatedTheme: T) => {
      setTheme((currentTheme: any) => merge(currentTheme, updatedTheme));
    }, []);

    const ContextValue: IThemeContext = {
      theme,
      updateTheme: updateThemeCallback,
    };

    useEffectAfterMount(() => {
      updateThemeCallback(initialTheme);
    }, [initialTheme]);

    return <Context.Provider value={ContextValue}>{children}</Context.Provider>;
  },
);

export const useTheme = () => useContext(Context);

export const createUseStyles = <
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>,
  P extends any[]
>(
  styles: ((theme: ThemeType, ...args: P) => T) | T,
) => {
  const useStyles = (...args: P): T => {
    const {theme} = useContext(Context);

    if (typeof styles === 'function') {
      return StyleSheet.create(styles(theme, ...args));
    }
    return StyleSheet.create(styles);
  };

  return useStyles;
};

export {defaultTheme};
