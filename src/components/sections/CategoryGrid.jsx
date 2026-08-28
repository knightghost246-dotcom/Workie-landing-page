import React from 'react'
import * as Icons from 'react-icons/fa'
import { CATEGORY_DATA } from '../../data/constants'
import '../../styles/components/CategoryGrid.css'

const CategoryGrid = () => {
  const getIcon = (name) => {
    const Icon = Icons[name]
    return Icon || Icons.FaCircle
  }

  return (
    <section className="category-grid">
      <div className="container">
        <div className="category-grid-wrapper">
          {CATEGORY_DATA.map((cat, i) => {
            const Icon = getIcon(cat.icon)
            return (
              <div key={i} className="category-card">
                <div className="icon-wrapper"><Icon /></div>
                <h3>{cat.title}</h3>
                <p>{cat.projects}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CategoryGrid
