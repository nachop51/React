import React, { useState } from 'react'
import confetti from 'canvas-confetti'
import Square from './components/Square'
import { turns } from './constants'
import {
  checkDraw,
  checkWinner,
  saveGameStorage,
  resetGameStorage
} from './logic/board'
import WinnerModal from './components/WinnerModal'

const App = () => {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage !== null) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    if (turnFromStorage !== null) return JSON.parse(turnFromStorage)
    return turns.x
  })
  const [winner, setWinner] = useState(() => {
    return checkWinner(board)
  })

  const updateBoard = (index) => {
    if (board[index] !== null || winner !== null) return

    const newBoard = board.map((value, i) => (i === index ? turn : value))
    setBoard(newBoard)
    const nextTurn = turn === turns.x ? turns.o : turns.x
    setTurn(nextTurn)

    saveGameStorage(newBoard, nextTurn)

    const newWinner = checkWinner(newBoard)

    if (newWinner !== null) {
      confetti()
      setWinner(newWinner)
    } else if (checkDraw(newBoard)) {
      setWinner('draw')
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(turns.x)
    setWinner(null)
    resetGameStorage()
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Restart game</button>
      <section className="game">
        {board.map((_, index) => (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {board[index]}
          </Square>
        ))}
      </section>
      <section className="turn">
        <Square isSelected={turn === turns.x}>{turns.x}</Square>
        <Square isSelected={turn === turns.o}>{turns.o}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
