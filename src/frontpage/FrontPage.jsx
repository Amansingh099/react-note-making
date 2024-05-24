import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const FrontPage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Program' title='Why to Use EverNote' />
        {/* <Programs/> */}
        <About/>
        <Title subTitle='An editor designed for focus' title='Just start typing. Everything else fades away so you can concentrate on the task at hand – no distractions' />
        {/* <Campus/> */}
        <Title subTitle='Reviews' title='What people are saying' />
         <Testimonials/> 
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Contact/>
        <Footer/>
        </div>
    </div>
  )
}

export default FrontPage