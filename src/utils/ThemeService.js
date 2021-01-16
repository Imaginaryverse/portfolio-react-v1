import { useContext } from 'react';
import { Context } from '../store/Store';

export const useTheme = () => {
  const [state] = useContext(Context);

  return `theme-${state.theme}`;
};
