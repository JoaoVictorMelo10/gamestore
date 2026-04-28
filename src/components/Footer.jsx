import { NavLink } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com',
      color: '#00f5ff',
      icon: (
        <svg style={{ width: '16px', height: '16px' }} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      )
    },
    {
      label: 'Instagram',
      href: 'https://instagram.com',
      color: '#ff006e',
      icon: (
        <svg style={{ width: '16px', height: '16px' }} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      label: 'Twitter',
      href: 'https://twitter.com',
      color: '#00f5ff',
      icon: (
        <svg style={{ width: '16px', height: '16px' }} fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
        </svg>
      )
    },
  ]

  return (
    <footer style={{ borderTop: '1px solid rgba(0,245,255,0.2)', backgroundColor: 'rgba(8,12,24,0.8)', marginTop: 'auto' }}>
      <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, #00f5ff, transparent)' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2.5rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>

          {/* Brand */}
          <div>
            <div style={{ fontFamily: 'Orbitron, monospace', fontWeight: 900, fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              <span className="neon-text-cyan">GAME</span>
              <span style={{ color: '#bf00ff', textShadow: '0 0 10px #bf00ff' }}>STORE</span>
            </div>
            <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: '1.6' }}>
              Sua loja virtual de games favorita. Os melhores títulos com os melhores preços.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 style={{ fontFamily: 'Orbitron, monospace', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.15em', color: '#00f5ff', marginBottom: '1rem', textTransform: 'uppercase' }}>
              Navegação
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><NavLink to="/" className="nav-link">Home</NavLink></li>
              <li><NavLink to="/products" className="nav-link">Produtos</NavLink></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 style={{ fontFamily: 'Orbitron, monospace', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.15em', color: '#00f5ff', marginBottom: '1rem', textTransform: 'uppercase' }}>
              Redes Sociais
            </h3>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {socialLinks.map(({ label, href, color, icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  style={{ width: '36px', height: '36px', border: `1px solid ${color}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', transition: 'all 0.3s ease', textDecoration: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.color = color; e.currentTarget.style.borderColor = color }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#64748b'; e.currentTarget.style.borderColor = `${color}33` }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(0,245,255,0.1)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
          <p style={{ color: '#475569', fontSize: '0.75rem', letterSpacing: '0.05em' }}>
            © {currentYear} <span style={{ color: '#00f5ff' }}>GameStore</span>. Todos os direitos reservados.
          </p>
          <p style={{ color: '#334155', fontSize: '0.75rem' }}>
            Feito com ❤️ para FIAP — Engenharia de Software
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer