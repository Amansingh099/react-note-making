import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Tame your work,
organize your life</h1>
            <p>Remember everything and tackle any project with your notes,
tasks, and schedule all in one place.</p>
            <button className='btn'>Login<img src={dark_arrow}alt=""/></button>
        </div>
    </div>
  )
}

export default Hero