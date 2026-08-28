import React from 'react'
import { CATEGORY_CHIPS } from '../../data/constants'
import '../../styles/components/Categories.css'

const Categories = () => {
  return (
    <section className="categories">
      <div className="container">
        <div className="categories-label">Pilih Kategori Populer</div>
        <div className="categories-chips">
          {CATEGORY_CHIPS.map((cat, i) => (
            <span key={i} className="chip">{cat}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
