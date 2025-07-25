import React from 'react'
import Button from './Button.js'

function Navbar() {
  
  const navbar = ['Home', 'Products', 'About', "Cotnacts"];

  return (
    <div className='navbar'>
    {
      navbar.map((element: string, index) => {
        return <Button key={index} text={element} />
      })

    }
    </div>
  )
}

export default Navbar