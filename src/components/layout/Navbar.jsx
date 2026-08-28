import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../assets/logo.svg'
import { NAV_LINKS } from '../../data/constants'
import '../../styles/components/Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <a href="/" className="navbar-logo">
          <img src={logo} alt="Workie" />
          <span className="navbar-logo-text">WORKIE</span>
        </a>

        <div className="navbar-links">
          {NAV_LINKS.map((link, i) => (
            <a key={i} href={link.href}>{link.label}</a>
          ))}
        </div>

        <div className="navbar-auth">
          <a href="#" className="login">Masuk</a>
          <a href="#" className="register-btn">Daftar</a>
        </div>

        <button className="navbar-mobile-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`container navbar-mobile-menu ${isOpen ? 'open' : ''}`}>
        {NAV_LINKS.map((link, i) => (
          <a key={i} href={link.href} onClick={() => setIsOpen(false)}>
            {link.label}
          </a>
        ))}
        <div className="auth-links">
          <a href="#" onClick={() => setIsOpen(false)}>Masuk</a>
          <a href="#" className="register-mobile" onClick={() => setIsOpen(false)}>Daftar</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
