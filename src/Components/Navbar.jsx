import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <header className='navbar'>
            <nav className='navbaritem'>
                <div className="logo">
                    <h1>Swayam.</h1>
                </div>
                <div>
                    <ul className='menulist'>
                        <li className="navlinkli"><NavLink className="navlink" to="/">Home</NavLink></li>
                        <li className="navlinkli"><NavLink  className="navlink" to="/contact">Contact</NavLink></li>
                        <li className="navlinkli"><NavLink  className="navlink" to="/work">Work</NavLink></li>
                        <li className="navlinkli"><NavLink  className="navlink" to="/experience">Experience</NavLink></li>
                        <li className="navlinkli"><NavLink  className="navlink" to="/about">About</NavLink></li>
                    </ul>
                </div>
            </nav>
      </header>
  )
}

export default Navbar