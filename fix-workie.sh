#!/bin/bash

echo "========================================"
echo "   MEMPERBAIKI FILE WORKIE"
echo "========================================"

# Buat folder jika belum ada
mkdir -p src/components/sections
mkdir -p src/styles/components

# Perbaiki CategoryGrid.jsx
cat > src/components/sections/CategoryGrid.jsx << 'EOF2'
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
EOF2

# Buat HowItWorks.jsx
cat > src/components/sections/HowItWorks.jsx << 'EOF2'
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
EOF2

# Buat Testimonials.jsx
cat > src/components/sections/Testimonials.jsx << 'EOF2'
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
EOF2

# Buat CtaBanner.jsx
cat > src/components/sections/CtaBanner.jsx << 'EOF2'
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
EOF2

# Buat file constants.js jika belum ada
cat > src/data/constants.js << 'EOF2'
export const NAV_LINKS = [
  { label: 'Cara Kerja', href: '#how-it-works' },
  { label: 'Project Terbaru', href: '#projects' },
  { label: 'Kategori', href: '#categories' },
  { label: 'FAQ', href: '#faq' }
]

export const CATEGORY_CHIPS = [
  'UI/UX Design', 'Web Dev', 'Copywriting',
  'SocMed Marketing', 'Video Editing', 'Translation', '3D Illustration'
]

export const CATEGORY_DATA = [
  { icon: 'FaPalette', title: 'Desain Grafis', projects: '1.240 Project Aktif' },
  { icon: 'FaCode', title: 'Video Editing', projects: '2.850 Project Aktif' },
  { icon: 'FaPenTool', title: '3D Ilustration', projects: '980 Project Aktif' },
  { icon: 'FaPenFancy', title: 'Penulisan & Konten', projects: '750 Project Aktif' },
  { icon: 'FaMoneyBill', title: 'Translation', projects: '620 Project Aktif' },
  { icon: 'FaMobileAlt', title: 'UI/UX Design', projects: '430 Project Aktif' }
]

export const STEPS = [
  { number: '01', title: 'Buat Project', desc: 'Klien pasang deskripsi project & budget transparan.' },
  { number: '02', title: 'Pilih Worker', desc: 'Dapatkan proposal dari talenta Gen-Z terbaik, pilih yang pas.' },
  { number: '03', title: 'Selesai!', desc: 'Kolaborasi aman, hasil dikirim, pembayaran otomatis diteruskan.' }
]

export const TESTIMONIALS = [
  {
    quote: "Berkat WORKIE, saya bisa bekerja dari rumah di Bali sembari melayani klien-klien korporasi dari Jakarta dengan kepastian sistem pembayaran yang aman.",
    name: "Rian Kartika",
    role: "Freelance Graphic Designer"
  },
  {
    quote: "Menemukan developer handal dan berintegritas tinggi kini jauh lebih cepat. Sistem filter kualifikasi di WORKIE sangat membantu proses screening awal.",
    name: "Amalia Putri",
    role: "Human Resources Manager di TechCorp"
  },
  {
    quote: "Hanya butuh waktu satu minggu setelah melengkapi profil profesional untuk mendapatkan pekerjaan full-time pertama saya di bidang rekayasa perangkat lunak.",
    name: "Dewo Prasetyo",
    role: "Junior Backend Engineer"
  }
]

export const FOOTER_LINKS = {
  perusahaan: ['Tentang Kami', 'Karir', 'Mitra Bisnis', 'Blog Resmi'],
  layanan: ['Cari Projek', 'Unggah Proyek', 'Sistem Pembayaran', 'Solusi Enterprise'],
  dukungan: ['Pusat Bantuan', 'Kebijakan Privasi', 'Syarat & Ketentuan', 'Kontak CS']
}
EOF2

echo "========================================"
echo "✅ Semua file telah dibuat!"
echo "========================================"
echo ""
echo "Jalankan: npm run dev"
echo "Buka browser: http://localhost:3000"
