import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import "./StylesHeader.css"
import "../../../index.css"
import logo from "../../../assets/logovale.jpg";
export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (

    <header className="containerHeader">
      <div className="logo">
      <img src={logo} alt="Logo Vale" />
      </div>
      {/* Botón de menú hamburguesa */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      {/* Menú de navegación */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/skills">Habilidades</NavLink>
        <NavLink to="/socialSkills">Habilidades Sociales</NavLink>
        <NavLink to="/studies">Estudios</NavLink>
        <NavLink to="/experiences">Experiencia</NavLink>
      </nav>
    </header>
  )
}
