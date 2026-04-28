function Header() {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      borderBottom: '1px solid rgba(0,245,255,0.2)',
      backgroundColor: 'rgba(4,5,10,0.92)',
      backdropFilter: 'blur(12px)',
    }}>
      <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, #00f5ff, transparent)' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
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
        </div>

      </div>

      <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(191,0,255,0.5), transparent)' }} />
    </header>
  )
}

export default Header