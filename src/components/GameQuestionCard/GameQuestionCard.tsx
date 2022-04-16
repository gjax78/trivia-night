import React, {useState} from 'react';
import { QuestionDataType as QuestionDataType } from '../App/App'
import '../QuestionCard/QuestionCard.css'

const GameQuestionCard = ({category, question, correctAnswer, incorrectAnswers, difficulty, removeFromGame, id }: QuestionDataType) : JSX.Element => {

  return (
    <div className='game-card'>
      <h2>{category}</h2>
      <h4>{question}</h4>
      <p>{correctAnswer}</p>
      <p>{incorrectAnswers}</p>
      <p>{difficulty}</p>

      <button 
        className='delete-button'
        onClick={() => removeFromGame(id)}
      >
        Remove From Game  
      </button>
    </div>
  )
}

export default GameQuestionCard;