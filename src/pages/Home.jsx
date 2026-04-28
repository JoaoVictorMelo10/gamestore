import { NavLink } from 'react-router-dom'

const stats = [
  { value: '500+', label: 'Jogos Disponíveis', color: '#00f5ff' },
  { value: '50K+', label: 'Clientes Satisfeitos', color: '#bf00ff' },
  { value: '4.9★', label: 'Avaliação Média', color: '#facc15' },
  { value: '24h',  label: 'Entrega Digital', color: '#ff006e' },
]

function Home() {
  return (
    <div className="grid-bg" style={{ minHeight: 'calc(100vh - 80px)', position: 'relative', overflow: 'hidden' }}>
      {/* Background glows */}
      <div style={{ position: 'absolute', top: '25%', left: '25%', width: '384px', height: '384px', backgroundColor: 'rgba(0,245,255,0.04)', borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '25%', right: '25%', width: '320px', height: '320px', backgroundColor: 'rgba(191,0,255,0.04)', borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none' }} />

      {/* Hero */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem 4rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '3rem' }}>

          {/* Text */}
          <div style={{ flex: '1 1 300px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid rgba(0,245,255,0.3)', backgroundColor: 'rgba(0,245,255,0.05)', padding: '0.5rem 1rem', marginBottom: '2rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00f5ff', animation: 'pulse 2s infinite' }} />
              <span style={{ fontFamily: 'Orbitron, monospace', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', color: '#00f5ff', textTransform: 'uppercase' }}>
                Loja Online — 24/7 Disponível
              </span>
            </div>

            <h1 className="animate-flicker" style={{ fontFamily: 'Orbitron, monospace', fontWeight: 900, lineHeight: 1, marginBottom: '1.5rem' }}>
              <span style={{ display: 'block', fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', color: 'white' }}>SEU PRÓXIMO</span>
              <span className="neon-text-cyan" style={{ display: 'block', fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', marginTop: '4px' }}>NÍVEL</span>
              <span style={{ display: 'block', fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', color: 'white', marginTop: '4px' }}>COMEÇA</span>
              <span className="neon-text-purple" style={{ display: 'block', fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', marginTop: '4px' }}>AQUI.</span>
            </h1>

            <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '480px', marginBottom: '2.5rem' }}>
              Os melhores títulos de todas as plataformas, com preços imbatíveis e entrega imediata. Sua jornada épica começa na GameStore.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <NavLink to="/products" style={{ textDecoration: 'none' }}>
                <button className="btn-primary">🎮 Ver Catálogo</button>
              </NavLink>
              <button style={{
                fontFamily: 'Orbitron, monospace', fontWeight: 700, letterSpacing: '0.15em', fontSize: '0.75rem',
                textTransform: 'uppercase', padding: '0.75rem 2rem',
                border: '1px solid #334155', color: '#94a3b8', background: 'none', cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
                onMouseEnter={e => { e.target.style.color = 'white'; e.target.style.borderColor = '#64748b' }}
                onMouseLeave={e => { e.target.style.color = '#94a3b8'; e.target.style.borderColor = '#334155' }}
              >
                Saiba Mais
              </button>
            </div>
          </div>

          {/* Controller illustration */}
          <div style={{ flex: '1 1 280px', display: 'flex', justifyContent: 'center' }}>
            <div className="animate-float">
              <svg viewBox="0 0 300 250" style={{ width: 'min(320px, 90vw)' }} xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="150" cy="200" rx="120" ry="20" fill="#00f5ff" opacity="0.08" />
                <path d="M60 100 Q60 60 100 60 L200 60 Q240 60 240 100 L250 160 Q255 200 230 200 L200 200 Q185 220 150 220 Q115 220 100 200 L70 200 Q45 200 50 160 Z" fill="#0d1428" stroke="#00f5ff" strokeWidth="2" />
                <path d="M60 120 Q40 120 40 150 Q40 185 65 185 L80 185 L80 120 Z" fill="#080c18" stroke="#00f5ff" strokeWidth="1.5" opacity="0.8"/>
                <path d="M240 120 Q260 120 260 150 Q260 185 235 185 L220 185 L220 120 Z" fill="#080c18" stroke="#00f5ff" strokeWidth="1.5" opacity="0.8"/>
                <rect x="85" y="105" width="12" height="30" rx="2" fill="#00f5ff" opacity="0.6"/>
                <rect x="78" y="112" width="26" height="12" rx="2" fill="#00f5ff" opacity="0.6"/>
                <circle cx="205" cy="105" r="8" fill="#bf00ff" opacity="0.8"/>
                <circle cx="220" cy="120" r="8" fill="#00f5ff" opacity="0.8"/>
                <circle cx="205" cy="135" r="8" fill="#39ff14" opacity="0.8"/>
                <circle cx="190" cy="120" r="8" fill="#ff006e" opacity="0.8"/>
                <text x="205" y="109" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">△</text>
                <text x="220" y="124" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">○</text>
                <text x="205" y="139" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">✕</text>
                <text x="190" y="124" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">□</text>
                <circle cx="110" cy="155" r="18" fill="#080c18" stroke="#00f5ff" strokeWidth="1.5" opacity="0.8"/>
                <circle cx="110" cy="155" r="10" fill="#0d1428" stroke="#00f5ff55" strokeWidth="1"/>
                <circle cx="190" cy="165" r="18" fill="#080c18" stroke="#00f5ff" strokeWidth="1.5" opacity="0.8"/>
                <circle cx="190" cy="165" r="10" fill="#0d1428" stroke="#00f5ff55" strokeWidth="1"/>
                <circle cx="150" cy="130" r="15" fill="#04050a" stroke="#00f5ff44" strokeWidth="1"/>
                <text x="150" y="135" textAnchor="middle" fill="#00f5ff" fontSize="14">⊕</text>
                <rect x="75" y="58" width="50" height="10" rx="5" fill="#1a2540" stroke="#00f5ff" strokeWidth="1.5"/>
                <rect x="175" y="58" width="50" height="10" rx="5" fill="#1a2540" stroke="#00f5ff" strokeWidth="1.5"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ borderTop: '1px solid rgba(0,245,255,0.1)', borderBottom: '1px solid rgba(0,245,255,0.1)', backgroundColor: 'rgba(8,12,24,0.4)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1.5rem', textAlign: 'center' }}>
            {stats.map(s => (
              <div key={s.label}>
                <div style={{ fontFamily: 'Orbitron, monospace', fontWeight: 900, fontSize: '1.8rem', color: s.color, textShadow: `0 0 10px ${s.color}` }}>{s.value}</div>
                <div style={{ color: '#475569', fontSize: '0.8rem', marginTop: '4px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Orbitron, monospace', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'white', marginBottom: '1rem' }}>
          Pronto para jogar?
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '480px', margin: '0 auto 2rem' }}>
          Explore nosso catálogo completo e encontre o jogo perfeito para você.
        </p>
        <NavLink to="/products" style={{ textDecoration: 'none' }}>
          <button className="btn-primary">🎮 Explorar Catálogo</button>
        </NavLink>
      </section>
    </div>
  )
}

export default Home