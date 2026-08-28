import React from 'react'
import { FaUserPlus } from 'react-icons/fa'
import '../../styles/components/CtaBanner.css'

const CtaBanner = () => {
  return (
    <section className="cta-banner">
      <div className="container">
        <div className="cta-banner-inner">
          <h2>Siap Memulai Karir Barumu?</h2>
          <p>
            Bergabunglah sekarang dengan ribuan profesional dan ratusan Freelancer terbaik di Indonesia. 
            Mulai langkah pertamamu hari ini secara gratis.
          </p>
          <a href="#" className="btn-white">
            <FaUserPlus style={{ marginRight: '8px' }} /> Daftar Sekarang
          </a>
        </div>
      </div>
    </section>
  )
}

export default CtaBanner
