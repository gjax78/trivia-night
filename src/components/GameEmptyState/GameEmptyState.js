import React from 'react'
import './GameEmptyState.css'

const GameEmptyState = () => {
  return (
    <div className='error-container'>
      <p>You haven't added any questions to your game. Please return home and add some questions!</p>
    </div>
  )
}

export default GameEmptyState;