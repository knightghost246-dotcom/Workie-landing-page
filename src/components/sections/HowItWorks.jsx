import React from 'react'
import { STEPS } from '../../data/constants'
import '../../styles/components/HowItWorks.css'

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="section-title">Bagaimana WORKIE Bekerja?</h2>
        <p className="section-sub">
          Mulai langkah karir atau proyek freelance barumu hanya dengan 3 langkah mudah berikut ini.
        </p>
        <div className="how-steps">
          {STEPS.map((step, i) => (
            <div key={i} className="step-card">
              <div className="step-number">{step.number}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
