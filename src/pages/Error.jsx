import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Error() {
  const [glitch, setGlitch] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true)
      setTimeout(() => setGlitch(false), 200)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid-bg" style={{ minHeight: 'calc(100vh - 80px)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '33%', left: '50%', transform: 'translateX(-50%)', width: '384px', height: '384px', backgroundColor: 'rgba(255,0,110,0.05)', borderRadius: '50%', filter: 'blur(60px)' }} />

      <div style={{ textAlign: 'center', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        {/* 404 glitch */}
        <div style={{ position: 'relative', marginBottom: '1rem', userSelect: 'none' }}>
          <span style={{
            display: 'block',
            fontFamily: 'Orbitron, monospace', fontWeight: 900,
            fontSize: 'clamp(80px, 18vw, 160px)', lineHeight: 1,
            color: glitch ? '#ff006e' : '#00f5ff',
            textShadow: glitch
              ? '3px 0 #ff006e, -3px 0 #00f5ff, 0 0 30px #ff006e'
              : '0 0 20px #00f5ff, 0 0 40px #00f5ff55',
            transform: glitch ? 'translateX(4px)' : 'translateX(0)',
            transition: 'all 0.05s',
          }}>
            404
          </span>
        </div>

        {/* Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid rgba(255,0,110,0.3)', backgroundColor: 'rgba(255,0,110,0.05)', padding: '0.5rem 1rem', marginBottom: '1.5rem' }}>
          <span style={{ fontFamily: 'Orbitron, monospace', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', color: '#ff006e', textTransform: 'uppercase' }}>
            ⚠ ERRO: Página não encontrada
          </span>
        </div>

        <h2 style={{ fontFamily: 'Orbitron, monospace', fontWeight: 900, fontSize: 'clamp(1.2rem, 3vw, 2rem)', color: 'white', marginBottom: '1rem' }}>
          ROTA <span className="neon-text-pink">INEXISTENTE</span>
        </h2>

        <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '400px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
          O nível que você está tentando acessar não existe. Retorne ao spawn point.
        </p>

        {/* Terminal */}
        <div style={{ backgroundColor: 'rgba(8,12,24,0.8)', border: '1px solid rgba(0,245,255,0.2)', padding: '1rem', textAlign: 'left', fontFamily: 'monospace', fontSize: '0.8rem', maxWidth: '320px', margin: '0 auto 2.5rem' }}>
          <div style={{ color: '#39ff14' }}>{'>'} sistema.status()</div>
          <div style={{ color: '#64748b' }}>{'>'} route: <span style={{ color: '#ff006e' }}>NOT_FOUND</span></div>
          <div style={{ color: '#64748b' }}>{'>'} code: <span style={{ color: '#facc15' }}>404</span></div>
          <div style={{ color: '#64748b' }}>{'>'} ação: <span style={{ color: '#00f5ff' }}>retornar_home</span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '8px' }}>
            <span style={{ color: '#00f5ff' }}>{'>'}</span>
            <span style={{ display: 'inline-block', width: '8px', height: '16px', backgroundColor: '#00f5ff', animation: 'pulse 1s infinite' }} />
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <NavLink to="/" style={{ textDecoration: 'none' }}>
            <button className="btn-primary">🏠 Voltar ao Início</button>
          </NavLink>
          <NavLink to="/products" style={{ textDecoration: 'none' }}>
            <button style={{
              fontFamily: 'Orbitron, monospace', fontWeight: 700, letterSpacing: '0.15em', fontSize: '0.75rem',
              textTransform: 'uppercase', padding: '0.75rem 2rem',
              border: '1px solid #334155', color: '#94a3b8', background: 'none', cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = '#64748b' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderColor = '#334155' }}
            >
              🎮 Ver Produtos
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Error