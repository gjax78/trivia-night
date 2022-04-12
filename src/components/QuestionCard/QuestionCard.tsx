import React from 'react';
import { QuestionDataType as QuestionDataType } from '../App/App'

const QuestionCard = ({ question, correctAnswer, incorrectAnswers, difficulty, category }: QuestionDataType) : JSX.Element => {
  return (
    <div className='card'>
      <h2>{category}</h2>
      <h4>{question}</h4>
      <p>{correctAnswer}</p>
      <p>{incorrectAnswers}</p>
      <p>{difficulty}</p>
    </div>
  )
}

export default QuestionCard;
