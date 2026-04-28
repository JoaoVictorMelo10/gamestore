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

function Products() {
  return (
    <div style={{ minHeight: 'calc(100vh - 80px)', position: 'relative', padding: '3rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontFamily: 'Orbitron, monospace', fontWeight: 900, fontSize: 'clamp(2rem, 6vw, 3.5rem)', color: 'white', marginBottom: '1rem' }}>
            NOSSOS <span className="neon-text-cyan">PRODUTOS</span>
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '480px', margin: '0 auto' }}>
            Encontre os melhores jogos para todas as plataformas ao melhor preço.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {games.map(game => <Card key={game.id} {...game} />)}
        </div>

      </div>
    </div>
  )
}

export default Products