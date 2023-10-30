import { winnerCombos } from '../constants'

export const checkWinner = (board: Array<string | null>): string | null => {
  for (const [a, b, c] of winnerCombos) {
    if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }
  return null
}

export const checkDraw = (board: Array<string | null>): boolean =>
  !board.includes(null)

export const saveGameStorage = (
  board: Array<string | null>,
  turn: string
): void => {
  localStorage.setItem('board', JSON.stringify(board))
  localStorage.setItem('turn', JSON.stringify(turn))
}

export const resetGameStorage = (): void => {
  localStorage.removeItem('board')
  localStorage.removeItem('turn')
}
