import React, { useContext } from 'react';
import { Context } from '../store/Store';
import ActionTypes from '../store/Actions';
import { saveToLocal } from '../utils/LocalStorageUtils';

const LanguageButton = ({ className }) => {
  const [state, dispatch] = useContext(Context);

  const changeLanguage = (language) => {
    saveToLocal('language', language);
    dispatch({ type: ActionTypes.SET_LANGUAGE, payload: language });
  };

  const selectedSv = state.language === 'sv';

  return (
    <button
      className={`nav-lang-btn ${className}`}
      onClick={() => changeLanguage(selectedSv ? 'en' : 'sv')}
    >
      <p
        style={{
          opacity: selectedSv ? 1 : 0.4,
          transform: `scale(${selectedSv ? '1' : '.8'})`,
        }}
      >
        SV
      </p>
      <p style={{ margin: '0 .2rem', opacity: 0.4 }}>/</p>
      <p
        style={{
          opacity: !selectedSv ? 1 : 0.4,
          transform: `scale(${!selectedSv ? '1' : '.8'})`,
        }}
      >
        EN
      </p>
    </button>
  );
};

export default LanguageButton;
