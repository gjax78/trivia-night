import React from 'react';
import QuestionCard from '../QuestionCard/QuestionCard'
import { QuestionsType as QuestionDataType} from '../App/App'
import './Questions.css'

const Questions = ({ questionsProp, addToGame }: QuestionDataType) : JSX.Element => {
  const questionCards = questionsProp.map(question => {
    if(!question.difficulty) {
      question.difficulty = "easy"
    }

    return (
        <div className='questions-container' key={question.id}>
          <QuestionCard
          addToGame={addToGame}
            {...question}
          />
        </div>
    )
  })
  return (
    <div className='questions-container'>
      {questionCards}
    </div>
  )
}

export default Questions;
