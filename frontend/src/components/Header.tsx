import React from 'react'
import Navbar from './Navbar'
import { assets } from '../assets/assets'
import Button from './Button'

function Header() {
  return (
    <header>
      <div className='logo'>
        <img src={assets.logo}></img>
      </div>
      <Navbar />
      {/* if you registered -> show notifications bar and profile -> settinh and out */}
      <div className="profile"> 
        <Button text={'Sign Up'}></Button>
        <Button text={'Login'}></Button>
      </div>
    </header>

  )
}

export default Header