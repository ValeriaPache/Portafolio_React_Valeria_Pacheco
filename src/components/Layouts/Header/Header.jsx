import React from 'react'
import { NavLink } from 'react-router-dom'
import "./StylesHeader.css"
import "../../../index.css"
export const Header = () => {
  return (
    <header className='containerHeader'>
        <nav className='navHeader'>
            <ul className='containerItemsHeader'>
                <li className='containerLiHeader'><NavLink to="/">Inicio</NavLink></li>
                <li className='containerLiHeader'><NavLink to="/skills">Habilidades</NavLink></li>
                <li className='containerLiHeader'><NavLink to="/socialskills">Habilidades Sociales</NavLink></li>
                <li className='containerLiHeader'><NavLink to="/studies">Estudios</NavLink></li>
                <li className='containerLiHeader'><NavLink to="/experiences">Experiencia</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}
