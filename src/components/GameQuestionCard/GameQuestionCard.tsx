import React, {useState} from 'react';
import { GameCardProps as GameCardProps } from '../../utilities/utilities';
import '../QuestionCard/QuestionCard.css'

const GameQuestionCard = ({category, question, correctAnswer, incorrectAnswers, difficulty, removeFromGame, id }: GameCardProps) : JSX.Element => {

  return (
    <div className='game-card'>
      <h2>Category: <br></br> {category}</h2>
      <h4><u>QUESTION:</u><br></br> 
        {question}</h4>
      <p><u>CORRECT ANSWER:</u> <br></br>
        {correctAnswer}</p>
      <p><u>INCORRECT ANSWERS: </u><br></br>
        {incorrectAnswers.join(', ')}</p>
      <p><u>DIFFICULTY: </u><br></br>
        {difficulty}</p>

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
