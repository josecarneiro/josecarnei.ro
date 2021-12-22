import { createContext, FunctionComponent, useContext, useState } from 'react';

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

export const ThemeProvider: FunctionComponent = ({ children }) => {
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
