import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to="/"><li>Home</li></Link>
      <Link to="/Login"><li>Login</li></Link>
      <Link to="/About"><li>Contact us</li></Link>
    </div>
  )
}

export default Navbar
