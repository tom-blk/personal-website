import React from 'react'

import './GradientBackground.Styles.css'


const GradientBackground = () => {

  const getRadomAnimation = () => {
    const animations = ['moveVertical', 'moveInCircle', 'moveHorizontal'];
    return `${animations[Math.floor(Math.random() * animations.length)+1]} ${Math.floor(Math.random() * 10)+1}s infinite alternate`
  }
  
  return (
    <div className="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div style={{animation: getRadomAnimation()}} className="gradient-1"></div>
          <div style={{}} className="gradient-2"></div>
          <div style={{}} className="gradient-3"></div>
          <div style={{}} className="gradient-4"></div>
          <div style={{}} className="gradient-5"></div>
        </div>
      </div>
  )
}

export default GradientBackground