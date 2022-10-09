import { createContext, useContext, useState } from 'react';
import type { FunctionComponentWithChildren } from '../types';

type ThemeContextData = { dark: boolean; colorful: boolean };

type ThemeContextValue = [
  ThemeContextData,
  ((data: ThemeContextData) => void) | null
];

const defaultThemeStateValue: ThemeContextData = {
  dark: false,
  colorful: false
};

const ThemeContext = createContext<ThemeContextValue>([
  defaultThemeStateValue,
  null
]);

export const ThemeProvider: FunctionComponentWithChildren = ({ children }) => {
  const [theme, changeTheme] = useState<ThemeContextData>(
    defaultThemeStateValue
  );
  return (
    <ThemeContext.Provider value={[theme, changeTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
