import { useContext } from 'react'
import { Context } from '../store/Store'

const copyKeys = {
  /* NAVBAR */
  NavHome: 'nav.home',
  NavProjects: 'nav.projects',
  NavAbout: 'nav.about',
  NavBlog: 'nav.blog',
  NavContact: 'nav.contact',

  /* HOME > HERO */
  HomeHeroIntro: 'hero.intro',
  HomeHeroHeader: 'hero.header',
  HomeHeroPresentation: 'hero.presentation',
}

export const copy = [
  /* NAVBAR */
  {
    key: copyKeys.NavHome,
    en: 'Home',
    sv: 'Hem'
  },
  {
    key: copyKeys.NavProjects,
    en: 'Projects',
    sv: 'Projekt'
  },
  {
    key: copyKeys.NavAbout,
    en: 'About',
    sv: 'Om Anton'
  },
  {
    key: copyKeys.NavBlog,
    en: 'Blog',
    sv: 'Blogg'
  },
  {
    key: copyKeys.NavContact,
    en: 'Contact',
    sv: 'Kontakt'
  },

  /* HOME > HERO */
  {
    key: copyKeys.HomeHeroIntro,
    en: "Hello! I'm Anton.",
    sv: 'Hej! Jag heter Anton.'
  },
  {
    key: copyKeys.HomeHeroHeader,
    en: "I build and tinker with websites.",
    sv: 'Jag bygger och fixar webbplatser.'
  },
  {
    key: copyKeys.HomeHeroPresentation,
    en: "I'm a budding frontend developer from Stockholm, Sweden, with a passion for learning new things and creating cool stuff.",
    sv: 'Jag är en blivande frontend utvecklare från Stockholm som älskar att lära mig nya saker och skapa spännande prylar.'
  },
]

export const useCopy = (copyKeysArr) => {
  const [ state, dispatch ] = useContext( Context )
  const selectedCopy = copyKeysArr.map(copyKey => copy.find(item => item.key === copyKey))

  return selectedCopy.length ? selectedCopy.reduce((o, item) => ({ ...o, [item.key]: item[state.language]}), {}) : {}
}

export default copyKeys