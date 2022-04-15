import React, {useState} from 'react';
import { QuestionDataType as QuestionDataType } from '../App/App'
import Game from '../Game/Game';

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
        onClick={() => setIsFav(true)}
        >{isFav ? 'liked' : 'like' }</button>

        {isFav ? 

        <Game 
        favCategory={category}
        favQuestion={question}
        favCorrectAnswer={correctAnswer} 
        favIncorrectAnswers={incorrectAnswers}
        favDifficulty={difficulty}
        />
        : null}
        
        {/* <Game isFav={isFav} /> */}
    </div>
  )
}

export default QuestionCard;
