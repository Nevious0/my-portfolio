import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'

 function Nav() {
    return (
       <nav className='header'>
           <h2>MASHOTA</h2>
           <ul className="nav-links">
             
            <Link style={navstyle} to="/">
               <li style={navstyle}>Home</li>
        </Link>
       
        <Link style={navstyle} to="/portfolio">
               <li>Portfolio</li>
               </Link>
               <Link style={navstyle} to="/contact">
               <li>Contact</li>
               </Link>
           </ul>
        </nav>
    )
}
const navstyle = {
    color: "#fff",
    textDecoration : "none",
    fontSize: "bold"
}

export default Nav

