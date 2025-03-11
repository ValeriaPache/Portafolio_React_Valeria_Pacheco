import React from 'react'
import "./Footer.css"
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="containerFooter">
      <nav>
        <ul className="footer-links">
          <li>
            <a href="https://wa.me/3112349080" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="icon"/> 
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/tu_usuario" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon"/>
            </a>
          </li>
          <li>
            <a href="mailto:vpachecoSanmartin@gmail.com">
              <FaEnvelope className="icon"/>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}


