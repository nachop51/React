import React from 'react'
import Square from './Square'

interface Props {
  winner: string | null
  resetGame: () => void
}

const WinnerModal = ({ winner, resetGame }: Props): JSX.Element => {
  if (winner === null) return <></>

  return (
    <section className="winner">
      <div className="text">
        <h2>{winner === 'draw' ? 'Draw' : 'Winner:'}</h2>
        <header>
          <Square>{winner === 'draw' ? '🤝' : winner}</Square>
        </header>
        <footer>
          <button onClick={resetGame}>Start again</button>
        </footer>
      </div>
    </section>
  )
}

export default WinnerModal
