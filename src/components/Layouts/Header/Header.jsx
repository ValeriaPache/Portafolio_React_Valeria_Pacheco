import React from 'react'
import { NavLink } from 'react-router-dom'
export const Header = () => {
  return (
    <header>
        <nav>
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/skills">Habilidades</NavLink></li>
                <li><NavLink to="/socialskills">Habilidades Sociales</NavLink></li>
                <li><NavLink to="/studies">Estudios</NavLink></li>
                <li><NavLink to="/experiences">Experiencia</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}
