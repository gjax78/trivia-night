import React from 'react';

interface Card {
  question: string,
  correctAnswer: string,
  incorrectAnswers: Array<string>,
  difficulty: string,
  category: string,
  id: string,
  type:string,
  tags: Array<any>,
}

const QuestionCard = ({ question, correctAnswer, incorrectAnswers, difficulty, category }: Card) => {
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