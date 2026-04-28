import { useState } from 'react'
import Card from '../components/Card'

const games = [
  { id: 1, title: 'Elden Ring', description: 'Um RPG de ação épico ambientado em um vasto mundo aberto repleto de criaturas sombrias e batalhas desafiadoras.', price: 249.90, image: 'https://picsum.photos/seed/eldenring/400/300', genre: 'RPG', rating: 5 },
  { id: 2, title: 'God of War: Ragnarök', description: 'Continue a jornada épica de Kratos e Atreus pelos mundos nórdicos. Ação cinematográfica e narrativa emocionante.', price: 299.90, image: 'https://picsum.photos/seed/godofwar/400/300', genre: 'Ação', rating: 5 },
  { id: 3, title: 'The Legend of Zelda: TotK', description: 'Explore o vasto reino de Hyrule por terra e ar nesta aventura épica cheia de segredos e desafios únicos.', price: 349.90, image: 'https://picsum.photos/seed/zelda2024/400/300', genre: 'Aventura', rating: 5 },
  { id: 4, title: 'Cyberpunk 2077', description: 'Mergulhe na cidade futurista de Night City como V, um mercenário em busca de imortalidade num mundo de alta tecnologia.', price: 149.90, image: 'https://picsum.photos/seed/cyberpunk77/400/300', genre: 'Ação', rating: 4 },
  { id: 5, title: "Baldur's Gate 3", description: 'Um RPG de fantasia profundo e expansivo. Faça escolhas que moldam o destino de Faerûn com companheiros únicos.', price: 249.90, image: 'https://picsum.photos/seed/baldursgate3/400/300', genre: 'RPG', rating: 5 },
  { id: 6, title: 'Starfield', description: 'Explore um universo com mais de 1000 planetas neste RPG espacial épico da Bethesda. Seja quem você quiser.', price: 299.90, image: 'https://picsum.photos/seed/starfield2023/400/300', genre: 'Aventura', rating: 4 },
  { id: 7, title: 'Street Fighter 6', description: 'O jogo de luta mais icônico retorna com novos lutadores, modo World Tour e o melhor gameplay da franquia.', price: 229.90, image: 'https://picsum.photos/seed/sf6fighter/400/300', genre: 'Ação', rating: 4 },
  { id: 8, title: 'Forza Horizon 5', description: 'Corridas de tirar o fôlego no México com mais de 500 carros licenciados e um mundo aberto deslumbrante.', price: 199.90, image: 'https://picsum.photos/seed/forzah5/400/300', genre: 'Corrida', rating: 5 },
]

const genres = ['Todos', 'RPG', 'Ação', 'Aventura', 'Corrida']

function Products() {
  const [selectedGenre, setSelectedGenre] = useState('Todos')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('default')

  const filtered = games
    .filter(g => {
      const matchGenre = selectedGenre === 'Todos' || g.genre === selectedGenre
      const matchSearch = g.title.toLowerCase().includes(searchTerm.toLowerCase()) || g.description.toLowerCase().includes(searchTerm.toLowerCase())
      return matchGenre && matchSearch
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price
      if (sortBy === 'price-desc') return b.price - a.price
      if (sortBy === 'rating') return b.rating - a.rating
      return a.id - b.id
    })

  return (
    <div style={{ minHeight: 'calc(100vh - 80px)', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 1.5rem' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontFamily: 'Orbitron, monospace', fontWeight: 900, fontSize: 'clamp(2rem, 6vw, 3.5rem)', color: 'white', marginBottom: '1rem' }}>
            NOSSOS <span className="neon-text-cyan">PRODUTOS</span>
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '480px', margin: '0 auto' }}>
            Encontre os melhores jogos para todas as plataformas ao melhor preço.
          </p>
        </div>

        {/* Filtros */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ position: 'relative', flex: '1 1 240px' }}>
            <svg style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px' }} fill="none" stroke="#00f5ff" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Buscar jogo..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              style={{ width: '100%', paddingLeft: '2.5rem', paddingRight: '1rem', paddingTop: '0.75rem', paddingBottom: '0.75rem', backgroundColor: 'rgba(13,20,40,0.8)', border: '1px solid rgba(0,245,255,0.2)', color: 'white', fontFamily: 'Rajdhani, sans-serif', fontSize: '1rem', outline: 'none' }}
            />
          </div>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            style={{ padding: '0.75rem 1rem', backgroundColor: 'rgba(13,20,40,0.8)', border: '1px solid rgba(0,245,255,0.2)', color: '#94a3b8', fontFamily: 'Rajdhani, sans-serif', fontSize: '1rem', outline: 'none', cursor: 'pointer' }}
          >
            <option value="default">Ordenar: Padrão</option>
            <option value="price-asc">Menor Preço</option>
            <option value="price-desc">Maior Preço</option>
            <option value="rating">Melhor Avaliado</option>
          </select>
        </div>

        {/* Gêneros */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
          {genres.map(g => (
            <button
              key={g}
              onClick={() => setSelectedGenre(g)}
              style={{
                fontFamily: 'Orbitron, monospace', fontWeight: 700, fontSize: '0.65rem', letterSpacing: '0.1em',
                textTransform: 'uppercase', padding: '0.5rem 1rem',
                border: `1px solid ${selectedGenre === g ? '#00f5ff' : '#334155'}`,
                color: selectedGenre === g ? '#00f5ff' : '#475569',
                backgroundColor: selectedGenre === g ? 'rgba(0,245,255,0.1)' : 'transparent',
                boxShadow: selectedGenre === g ? '0 0 10px rgba(0,245,255,0.3)' : 'none',
                cursor: 'pointer', transition: 'all 0.3s ease',
              }}
            >
              {g}
            </button>
          ))}
        </div>

        {/* Resultado */}
        {filtered.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {filtered.map(game => <Card key={game.id} {...game} />)}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '5rem 0' }}>
            <p style={{ fontFamily: 'Orbitron, monospace', fontWeight: 700, color: '#475569', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Nenhum jogo encontrado</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products