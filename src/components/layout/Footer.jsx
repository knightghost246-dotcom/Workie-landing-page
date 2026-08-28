import React from 'react'
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import logo from '../../assets/logo.svg'
import { FOOTER_LINKS } from '../../data/constants'
import '../../styles/components/Footer.css'

const Footer = () => {
  const socialIcons = [FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src={logo} alt="Workie" width="36" height="36" />
              <span style={{ fontWeight: 800, fontSize: '22px', color: '#111827' }}>WORKIE</span>
            </div>
            <p>Platform karir dan pencarian kerja lepas #1 di Indonesia. Menghubungkan talenta berbakat dengan peluang tak terbatas.</p>
            <div className="footer-social">
              {socialIcons.map((Icon, i) => (
                <a key={i} href="#"><Icon /></a>
              ))}
            </div>
          </div>
          {Object.entries(FOOTER_LINKS).map(([key, links]) => (
            <div key={key} className="footer-col">
              <h5>{key}</h5>
              {links.map((link, i) => (
                <a key={i} href="#">{link}</a>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-bottom">© 2026 WORKIE. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
