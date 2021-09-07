import React from 'react'
import { NavLink } from 'react-router-dom'

interface INavbar {
  totalItems: Number
}

export const Navbar: React.FunctionComponent<INavbar> = (props) => (
  <nav>
    <div className="nav-wrapper cyan darken-1 px1">
        Google Books    
      
    </div>
  </nav>
)
