import React, {useState} from 'react';
import { QuestionDataType as QuestionDataType } from '../App/App'
import Game from '../Game/Game';
import './QuestionCard.css'

const QuestionCard = ({addToGame, question, correctAnswer, incorrectAnswers, difficulty, category, id }: QuestionDataType) : JSX.Element => {

  const [isFav, setIsFav] = useState(false)

  const addQuestion = () => {
    if(!isFav) {
      setIsFav(true);
      const likedQuestion = {
        question: question,
        correctAnswer: correctAnswer,
        incorrectAnswers: incorrectAnswers,
        difficulty: difficulty,
        category: category,
        id: id
      }
      addToGame(likedQuestion)
    } else {
      setIsFav(false);
    }
  }

  return (
    <div className='card'>
      <h2>{category}</h2>
      <h4>{question}</h4>
      <p>{correctAnswer}</p>
      <p>{incorrectAnswers}</p>
      <p>{difficulty}</p>

      <button className='like-button'
        onClick={() => addQuestion()}>
          {isFav ? 'added' : 'add to game'}
      </button>
    </div>
  )
}

export default QuestionCard;
