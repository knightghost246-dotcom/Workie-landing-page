import React from 'react'
import { FaSearch, FaPlus } from 'react-icons/fa'
import '../../styles/components/Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-wrapper">
        <div className="hero-content fade-up">
          <h1>Punya project? <br /><span>Cari orangnya.</span></h1>
          <p>Solusi praktis anak muda buat cari freelance project & jasa andalan. Pembayaran aman, kerjaan kelar tanpa ribet. Anti-LinkedIn, murni portofolio dan skill!</p>
          <div className="hero-ctas">
            <a href="#" className="btn-primary"><FaSearch /> Cari Project</a>
            <a href="#" className="btn-outline"><FaPlus /> Buat Project</a>
          </div>
        </div>
        <div className="hero-image">
          <svg viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="180" fill="#0D9488" opacity="0.1" />
            <circle cx="140" cy="140" r="60" fill="#0D9488" opacity="0.15" />
            <circle cx="280" cy="260" r="80" fill="#0D9488" opacity="0.1" />
            <rect x="100" y="220" width="200" height="120" rx="20" fill="white" opacity="0.6" />
            <rect x="130" y="250" width="140" height="12" rx="6" fill="#0D9488" opacity="0.3" />
            <rect x="130" y="280" width="100" height="12" rx="6" fill="#0D9488" opacity="0.2" />
            <rect x="130" y="310" width="80" height="12" rx="6" fill="#0D9488" opacity="0.15" />
            <circle cx="120" cy="120" r="30" fill="#0D9488" opacity="0.2" />
            <circle cx="300" cy="100" r="40" fill="#0D9488" opacity="0.1" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero
