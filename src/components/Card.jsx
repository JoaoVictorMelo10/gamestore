import { useState } from 'react'

const genreColors = {
  'RPG':       { color: '#bf00ff', border: 'rgba(191,0,255,0.4)' },
  'Ação':      { color: '#ff006e', border: 'rgba(255,0,110,0.4)' },
  'Aventura':  { color: '#00f5ff', border: 'rgba(0,245,255,0.4)' },
  'Estratégia':{ color: '#39ff14', border: 'rgba(57,255,20,0.4)' },
  'FPS':       { color: '#ff9800', border: 'rgba(255,152,0,0.4)' },
  'Corrida':   { color: '#ffeb3b', border: 'rgba(255,235,59,0.4)' },
}

function Card({ title, description, price, image, genre, rating }) {
  const [added, setAdded] = useState(false)
  const [hovered, setHovered] = useState(false)

  const gColor = genreColors[genre] || genreColors['Aventura']

  const handleBuy = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div
      className="card-hover"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        border: '1px solid rgba(0,245,255,0.2)',
        backgroundColor: 'rgba(13,20,40,0.8)',
        overflow: 'hidden',
        clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
        transition: 'all 0.3s ease',
        boxShadow: hovered ? '0 0 25px rgba(0,245,255,0.15)' : 'none',
      }}
    >
      {/* Corner accents */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '16px', height: '16px', borderTop: '2px solid #00f5ff', borderLeft: '2px solid #00f5ff', zIndex: 3 }} />
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: '16px', height: '16px', borderBottom: '2px solid #00f5ff', borderRight: '2px solid #00f5ff', zIndex: 3 }} />

      {/* Image */}
      <div style={{ position: 'relative', overflow: 'hidden', height: '192px' }}>
        <img
          src={image}
          alt={title}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transition: 'transform 0.7s ease',
            transform: hovered ? 'scale(1.1)' : 'scale(1)',
          }}
          onError={(e) => { e.target.src = `https://picsum.photos/seed/${encodeURIComponent(title)}/400/300` }}
        />
        <div className="scanlines" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px', background: 'linear-gradient(to top, #0d1428, transparent)' }} />

        {/* Genre badge */}
        <div style={{
          position: 'absolute', top: '12px', right: '12px',
          border: `1px solid ${gColor.border}`,
          color: gColor.color,
          fontFamily: 'Orbitron, monospace', fontWeight: 700, fontSize: '0.65rem', letterSpacing: '0.1em',
          padding: '2px 8px', textTransform: 'uppercase',
          backgroundColor: 'rgba(4,5,10,0.8)', backdropFilter: 'blur(4px)',
        }}>
          {genre}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '1.25rem', position: 'relative', zIndex: 2 }}>
        {/* Stars */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2px', marginBottom: '0.5rem' }}>
          {[...Array(5)].map((_, i) => (
            <svg key={i} style={{ width: '12px', height: '12px', color: i < rating ? '#facc15' : '#1e293b' }} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          ))}
          <span style={{ color: '#475569', fontSize: '0.7rem', marginLeft: '4px' }}>({rating}.0)</span>
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: 'Orbitron, monospace', fontWeight: 700, fontSize: '0.9rem',
          color: hovered ? '#00f5ff' : 'white',
          textShadow: hovered ? '0 0 10px #00f5ff' : 'none',
          marginBottom: '0.5rem', lineHeight: 1.3,
          transition: 'all 0.3s ease',
        }}>
          {title}
        </h3>

        {/* Description */}
        <p style={{
          color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.5,
          marginBottom: '1rem',
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>
          {description}
        </p>

        {/* Price + Buy */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <span style={{ color: '#475569', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block' }}>Preço</span>
            <span className="neon-text-cyan" style={{ fontFamily: 'Orbitron, monospace', fontWeight: 900, fontSize: '1.1rem' }}>
              R$ {price.toFixed(2).replace('.', ',')}
            </span>
          </div>

          <button
            onClick={handleBuy}
            className="btn-primary"
            style={{
              borderColor: added ? '#39ff14' : '#00f5ff',
              color: added ? '#39ff14' : '#00f5ff',
              backgroundColor: added ? 'rgba(57,255,20,0.1)' : undefined,
              clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
              padding: '0.5rem 1rem',
            }}
          >
            {added ? '✓ Adicionado' : 'Comprar'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
