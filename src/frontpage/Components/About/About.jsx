import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
function About() {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon'/>
        </div>
        <div className='about-right'>
        <h3>About Our Project</h3>
        <h2>Your information,your way</h2>
        <p>Edusity makes it easy to collaborate on projects. Real-Time Editing immediately syncs changes to keep all contributors up to date.</p>
        <p>The Search Feature helps in searching the infomation in more effective manner and helps in maintaing a clean and easy environment</p>
        <p>With Edusity, you have everything you need to keep life organized. Use it for note taking, project planning, and to find what you need, when you need it.</p>
        </div>
    </div>
  )
}

export default About
