import React from 'react'
import { Link } from 'react-router-dom'
import copyKeys from '../utils/CopyService'
import routes from '../utils/Routes'
import { useWindowDimensions } from '../utils/useWindowDimensions'
import NavList from './NavList'
import Text from './Text'
import Hamburger from './Hamburger'

import '../styles/nav.css'

export const Nav = () => {
  const { width } = useWindowDimensions()

  const navItems = [
    {path: routes.projects, title: copyKeys.NavProjects},
    {path: routes.about, title: copyKeys.NavAbout},
    {path: routes.blog, title: copyKeys.NavBlog},
    {path: routes.contact, title: copyKeys.NavContact}
  ]

  return (
    <nav className="nav">
      <div className="nav-content-wrapper">
        <Link
        className='nav-list-link'
        to='/'>
          <Text
          copyText='A.B'
          style={{ fontSize: '1.8rem', fontWeight: '800' }}
          />
        </Link>

        { width > 768
        ? <NavList navItems={navItems}/>
        : <Hamburger navItems={navItems}/>
        }
      </div>
    </nav>
  )
}
