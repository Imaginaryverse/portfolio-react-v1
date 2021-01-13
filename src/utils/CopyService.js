import { useContext } from 'react'
import { Context } from '../store/Store'

const copyKeys = {
  /* NAVBAR */
  NavHome: 'nav.home',
  NavProjects: 'nav.projects',
  NavAbout: 'nav.about',
  NavBlog: 'nav.blog',
  NavContact: 'nav.contact',
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
]

export const useCopy = (copyKeysArr) => {
  const [ state, dispatch ] = useContext( Context )
  const selectedCopy = copyKeysArr.map(copyKey => copy.find(item => item.key === copyKey))

  return selectedCopy.length ? selectedCopy.reduce((o, item) => ({ ...o, [item.key]: item[state.language]}), {}) : {}
}

export default copyKeys