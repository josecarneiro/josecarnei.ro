import { createContext, useCallback, useContext, useState } from 'react';

import type { FunctionComponent } from 'react';

export type ThemeContextData = { dark: boolean; colorful: boolean };

export type ThemeContextValue = [
  ThemeContextData,
  (data: Partial<ThemeContextData>) => void
];

const defaultThemeStateValue: ThemeContextData = {
  dark: false,
  colorful: false
};

export const ThemeContext = createContext<ThemeContextValue>([
  defaultThemeStateValue,
  () => {}
]);

export const ThemeProvider: FunctionComponent = ({ children }) => {
  const [theme, changeTheme] = useState<ThemeContextData>(
    defaultThemeStateValue
  );
  const partiallyChangeTheme = useCallback(
    (value) => changeTheme({ ...theme, ...value }),
    [theme, changeTheme]
  );
  return (
    <ThemeContext.Provider value={[theme, partiallyChangeTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
