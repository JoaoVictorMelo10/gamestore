import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      borderBottom: '1px solid rgba(0,245,255,0.2)',
      backgroundColor: 'rgba(4,5,10,0.92)',
      backdropFilter: 'blur(12px)',
    }}>
      {/* Top accent line */}
      <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, #00f5ff, transparent)' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div className="animate-pulse-glow" style={{ width: '40px', height: '40px' }}>
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
              <rect x="1" y="1" width="38" height="38" rx="4" stroke="#00f5ff" strokeWidth="1.5" />
              <path d="M8 20h8M12 16v8" stroke="#00f5ff" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="26" cy="17" r="2" fill="#bf00ff"/>
              <circle cx="31" cy="22" r="2" fill="#00f5ff"/>
              <circle cx="26" cy="27" r="2" fill="#ff006e"/>
              <circle cx="21" cy="22" r="2" fill="#39ff14"/>
            </svg>
          </div>
          <div>
            <span className="neon-text-cyan" style={{ fontFamily: 'Orbitron, monospace', fontWeight: 900, fontSize: '1.2rem', letterSpacing: '0.15em', display: 'block', lineHeight: 1 }}>
              GAME
            </span>
            <span style={{ fontFamily: 'Orbitron, monospace', fontWeight: 900, fontSize: '1.2rem', letterSpacing: '0.15em', display: 'block', lineHeight: 1, color: '#bf00ff', textShadow: '0 0 10px #bf00ff' }}>
              STORE
            </span>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          <NavLink to="/" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            Produtos
          </NavLink>
        </nav>

        {/* CTA */}
        <div className="desktop-nav">
          <NavLink to="/products" style={{ textDecoration: 'none' }}>
            <button className="btn-primary">Ver Catálogo</button>
          </NavLink>
        </div>

        {/* Mobile button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <svg style={{ width: '24px', height: '24px', color: '#00f5ff' }} fill="none" stroke="#00f5ff" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ borderTop: '1px solid rgba(0,245,255,0.2)', backgroundColor: 'rgba(8,12,24,0.97)', backdropFilter: 'blur(12px)', padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Home</NavLink>
          <NavLink to="/products" onClick={() => setMenuOpen(false)} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Produtos</NavLink>
        </div>
      )}

      <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(191,0,255,0.5), transparent)' }} />

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  )
}

export default Header
