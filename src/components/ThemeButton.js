import React, { useContext } from 'react';
import { Context } from '../store/Store';
import ActionTypes from '../store/Actions';
import IconFA from './IconFA';
import icons from '../utils/Icons';
import { saveToLocal } from '../utils/LocalStorageUtils';

const ThemeButton = ({ className }) => {
  const [state, dispatch] = useContext(Context);

  const changeTheme = (theme) => {
    saveToLocal('theme', theme);
    dispatch({ type: ActionTypes.SET_THEME, payload: theme });
  };

  const selectedDark = state.theme === 'dark';

  return (
    <button
      aria-label="theme button"
      className={`nav-theme-btn ${className}`}
      onClick={() => {
        changeTheme(selectedDark ? 'light' : 'dark');
      }}
    >
      {selectedDark ? (
        <IconFA icon={icons.sun} />
      ) : (
        <IconFA icon={icons.moon} />
      )}
    </button>
  );
};

export default ThemeButton;
