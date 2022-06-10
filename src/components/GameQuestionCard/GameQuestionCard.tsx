import React, {useState} from 'react';
import { GameCardProps as GameCardProps } from '../../utilities/utilities';
import '../QuestionCard/QuestionCard.css'

const GameQuestionCard = ({category, question, correctAnswer, incorrectAnswers, difficulty, removeFromGame, id }: GameCardProps) : JSX.Element => {

  return (
    <div className='game-card'>
      <h2 className='category-title'>Category: {category}</h2>
      <h4 className='question-div'><u>QUESTION:</u><br></br> 
        {question}</h4>
      <div className='answer-container'>
        <p><u>CORRECT ANSWER:</u> <br></br>
          {correctAnswer}</p>
        <p><u>INCORRECT ANSWERS: </u><br></br>
          {incorrectAnswers.join(', ')}</p>
        <p><u>DIFFICULTY: </u><br></br>
          {difficulty}</p>
      </div>
      <button
        className='delete-button'
        onClick={() => removeFromGame(id)}
      >
        DELETE
      </button>
    </div>
  )
}

export default GameQuestionCard;
