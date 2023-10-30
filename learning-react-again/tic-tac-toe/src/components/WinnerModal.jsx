import React from 'react'
import Square from './Square'
import PropTypes from 'prop-types'

const WinnerModal = ({ winner, resetGame }) => {
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

WinnerModal.propTypes = {
  winner: PropTypes.string,
  resetGame: PropTypes.func.isRequired
}

export default WinnerModal
