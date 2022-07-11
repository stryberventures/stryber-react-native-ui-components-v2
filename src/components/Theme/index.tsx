import React, {useCallback, useContext, useMemo, useState} from 'react';
import {merge} from '../../utils/deepMerge';
import {StyleSheet} from 'react-native';

import {defaultTheme} from './defaultTheme';

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
  initial: Object;
  children?: React.ReactNode;
}

const Context = React.createContext<IThemeContext>({
  theme: defaultTheme,
  updateTheme: () => console.log('ThemeProvider is not rendered yet'),
});

export const ThemeProvider = React.memo<IThemeProvider>(
  ({initial, children}) => {
    const [theme, setTheme] = useState(merge(defaultTheme, initial));

    const UpdateThemeCallback = useCallback(<T,>(updatedTheme: T) => {
      setTheme((currentTheme: any) => merge(currentTheme, updatedTheme));
    }, []);

    const MemoizedValue = useMemo(() => {
      const value: IThemeContext = {
        theme,
        updateTheme: UpdateThemeCallback,
      };
      return value;
    }, [theme, UpdateThemeCallback]);

    return (
      <Context.Provider value={MemoizedValue}>{children}</Context.Provider>
    );
  },
);

export const useTheme = () => useContext(Context);

export const createUseStyles = <
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>,
  P extends any[]
>(
  styles: ((theme: ThemeType, ...args: P) => T) | T,
) => {
  const useStyles = (...args: P): T | StyleSheet.NamedStyles<T> => {
    const {theme} = useContext(Context);

    if (typeof styles === 'function') {
      return StyleSheet.create(styles(theme, ...args));
    }
    return StyleSheet.create(styles);
  };

  return useStyles;
};
