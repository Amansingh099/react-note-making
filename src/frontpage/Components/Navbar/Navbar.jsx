import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import BookIcon from '@mui/icons-material/Book';
const Navbar = () => {
  const [sticky,setSticky]=useState(false)

  useEffect(()=>{window.addEventListener('scroll',()=>{window.scrollY > 50 ? setSticky(true):setSticky(false)})

  },[]);



  return (
    <nav className={`container ${sticky? 'dark-nav':''}`}>
        {/* <img src={logo} alt="" className='logo'/> */}
        <h4 className='heading'>
        <BookIcon/>
        Evernote
      </h4>
        <ul>
            <li>Home</li>
            <li><Link to="/login"  className="text-xl ">Login</Link></li>
        </ul>
    </nav>

  )
}

export default Navbar