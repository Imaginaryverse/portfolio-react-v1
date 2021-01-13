import React from 'react'
import '../styles/home.css'
import copyKeys from '../utils/CopyService'
import Text from './Text'

const Hero = () => {
  return (
    <div className="hero">
        <a href="#" className='hero-intro'>
          <Text
          copyKey={ copyKeys.HomeHeroIntro }
          />
        </a>
        <h1 className='hero-header'>
          <Text
          copyKey={ copyKeys.HomeHeroHeader }
          />
        </h1>
        <p className='hero-presentation'>
          <Text
          copyKey={ copyKeys.HomeHeroPresentation }
          />
        </p>
        <a href='#' className="hero-cta">
          <div className='hero-cta-arrow'>
            >
          </div>
          Projects
        </a>
      </div>
  )
}

export default Hero
