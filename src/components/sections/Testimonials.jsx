import React from 'react'
import { FaStar } from 'react-icons/fa'
import { TESTIMONIALS } from '../../data/constants'
import '../../styles/components/Testimonials.css'

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">Apa Kata Pengguna WORKIE?</h2>
        <p className="section-sub">
          Ribuan talenta dan bisnis di Indonesia telah menemukan kecocokan karir 
          serta kebutuhan kerja mereka lewat platform kami.
        </p>
        <div className="testimonial-grid">
          {TESTIMONIALS.map((testimonial, i) => (
            <div key={i} className="testimonial-card">
              <div className="stars">
                {[...Array(5)].map((_, j) => (
                  <FaStar key={j} />
                ))}
              </div>
              <blockquote>"{testimonial.quote}"</blockquote>
              <div className="user-profile">
                <div className="user-avatar">{testimonial.name.charAt(0)}</div>
                <div className="user-info">
                  <h5>{testimonial.name}</h5>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
