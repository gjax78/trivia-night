import React, {useState} from 'react';
import { QuestionCardProps as QuestionCardProps } from '../../utilities/utilities';
import {LikedQuestion as LikedQuestion } from '../../utilities/utilities';
import Game from '../Game/Game';
import './QuestionCard.css'

const QuestionCard = ({addToGame, removeFromGame, question, correctAnswer, incorrectAnswers, difficulty, category, id }: QuestionCardProps) : JSX.Element => {

  const [isFav, setIsFav] = useState(false)

  const addQuestion = () => {
    if(!isFav) {
      setIsFav(true);
      const likedQuestion: LikedQuestion = {
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
      removeFromGame(id);
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
