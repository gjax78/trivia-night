import React from 'react';

const QuestionCard = ({ question, correctAnswer, incorrectAnswers, difficulty, category, id }) => {
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