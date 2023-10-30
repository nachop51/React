import { winnerCombos } from '../constants'

export const checkWinner = (board) => {
  for (const [a, b, c] of winnerCombos) {
    if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }
  return null
}

export const checkDraw = (board) => !board.includes(null)

export const saveGameStorage = (board, turn) => {
  localStorage.setItem('board', JSON.stringify(board))
  localStorage.setItem('turn', JSON.stringify(turn))
}

export const resetGameStorage = () => {
  localStorage.removeItem('board')
  localStorage.removeItem('turn')
}
