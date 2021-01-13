import React, { useContext, useEffect } from 'react'
import { Context } from '../store/Store'
import ActionTypes from '../store/Actions'

const LanguageButton = ({ className }) => {
  const [ state, dispatch] = useContext(Context)
  const saveToLocal = (language) => {
    localStorage.setItem('language', JSON.stringify(language))
  }

  const changeLanguage = (language) => {
    saveToLocal(language)
    dispatch({ type: ActionTypes.SET_LANGUAGE, payload: language })
  }

  const setLangFromLocal = () => {
    const localLang = JSON.parse(localStorage.getItem('language'))
    const localLangIsNew = localLang && localLang !== state.language
    if (localLangIsNew){
      dispatch({ type: ActionTypes.SET_LANGUAGE, payload: localLang })
    }
  }

  useEffect(() => {
    setLangFromLocal()
  })

  const selectedSv = state.language === 'sv'

  return (
    <button
      className={`nav-lang-btn ${ className }`}
      onClick={() => changeLanguage(state.language === 'sv' ? 'en' : 'sv') }
      >
        <p
        style={{ opacity:  selectedSv ? 1 : 0.4, transform: `scale(${ selectedSv ? '1' : '.8'})` }}>SV</p>
        <p style={{ margin: '0 .2rem', opacity: .4 }}>/</p>
        <p
        style={{ opacity: !selectedSv ? 1 : 0.4, transform: `scale(${ !selectedSv ? '1' : '.8'})` }}>EN</p>
    </button>
  )
}

export default LanguageButton
