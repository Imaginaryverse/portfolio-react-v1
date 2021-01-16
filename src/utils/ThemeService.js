import { useContext } from 'react';
import { Context } from '../store/Store';

export const useTheme = () => {
  const [state] = useContext(Context);

  return themeColors[state.theme];
};

const colors = {
  black: '#141115',
  brown: '#352e37',
  white: '#f4eded',
  greenDark: '#254a4a',
  greenLight: '#36827f',
  purple: '#a288a6',
  yellow: '#f9db6d',
  orangeLight: '#f46036',
  orangeDark: '#e93c0c',
};

const themeColors = {
  dark: {
    backgroundColor: colors.black,
    textPrimary: colors.white,
    accent: colors.orangeLight,
    accentHover: colors.orangeDark,
    tertiary: colors.greenLight,
    tertiaryHover: colors.greenDark,
  },
  light: {
    backgroundColor: colors.white,
    textPrimary: colors.black,
    accent: colors.orangeLight,
    accentHover: colors.orangeDark,
    tertiary: colors.greenLight,
    tertiaryHover: colors.greenDark,
  },
};
