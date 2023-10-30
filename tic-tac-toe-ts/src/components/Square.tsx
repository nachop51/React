import React from 'react'

interface Props {
  children?: string
  updateBoard?: (index: number) => void
  index?: number | null
  isSelected?: boolean
}

const Square = ({
  isSelected = false,
  children,
  updateBoard,
  index = 0
}: Props): JSX.Element => {
  const handleClick = (): void => {
    if (updateBoard !== undefined && typeof index === 'number') {
      updateBoard(index)
    }
  }

  return (
    <div
      className={`square ${isSelected ? 'is-selected' : ''}`}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}

export default Square
