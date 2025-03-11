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
        <NavLink to="/" onClick={() => setMenuOpen(false)}>Inicio</NavLink>
        <NavLink to="/skills" onClick={() => setMenuOpen(false)}>Habilidades</NavLink>
        <NavLink to="/socialSkills" onClick={() => setMenuOpen(false)}>Habilidades Sociales</NavLink>
        <NavLink to="/studies" onClick={() => setMenuOpen(false)}>Estudios</NavLink>
        <NavLink to="/experiences" onClick={() => setMenuOpen(false)}>Experiencia</NavLink>
      </nav>
    </header>
  )
}
