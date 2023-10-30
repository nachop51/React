import React from 'react'

import PropTypes from 'prop-types'

const Square = ({
  isSelected = false,
  children,
  updateBoard,
  index = 0
}) => {
  const handleClick = () => {
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

Square.propTypes = {
  isSelected: PropTypes.bool,
  children: PropTypes.node,
  updateBoard: PropTypes.func,
  index: PropTypes.number
}

export default Square
