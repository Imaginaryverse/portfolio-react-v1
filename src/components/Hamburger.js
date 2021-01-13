import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LanguageButton from './LanguageButton'
import Text from './Text'

const Hamburger = ({ navItems }) => {
  const [ active, setActive ] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <>
    <div
    className='hamburger-btn'
    onClick={ handleClick }
    >
      <div className={`hamburger-bar bar-top ${ active ? 'active-top' : null }`}></div>
      <div className={`hamburger-bar bar-mid ${ active ? 'active-mid' : null }`}></div>
      <div className={`hamburger-bar bar-bottom ${ active ? 'active-bottom' : null }`}></div>
    </div>

    {active && (<div className='hamburger-wrapper'> <ul className='hamburger-content'>
    { navItems.map(( item, i ) => (
      <Link
      className="nav-list-link hamburger-link"
      key={ i }
      to={ item.path }
      onClick={ handleClick }
      >
        <li>
          <Text
          copyKey={ item.title }
          style={{ fontSize: '1.5rem', fontWeight: 'normal' }}
          />
        </li>
      </Link>
    )) }
    <LanguageButton className='nav-lang-btn-hamburger' />
  </ul></div>)}

  </>
  )
}

export default Hamburger
