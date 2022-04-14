import React, {useState} from 'react';
import { QuestionDataType as QuestionDataType } from '../App/App'

const QuestionCard = ({ question, correctAnswer, incorrectAnswers, difficulty, category }: QuestionDataType) : JSX.Element => {
  
  const [isFav, setIsFav] = useState(false)
  
  return (
    <div className='card'>
      <h2>{category}</h2>
      <h4>{question}</h4>
      <p>{correctAnswer}</p>
      <p>{incorrectAnswers}</p>
      <p>{difficulty}</p>
      <button className='like-button'
        onClick={() => setIsFav(!isFav)}
        >{isFav ? 'liked' : 'like' }</button>
    </div>
  )
}

export default QuestionCard;
