import React from 'react';
import QuestionCard from '../QuestionCard/QuestionCard'
import { QuestionData as QuestionData} from '../App/App'

const Questions = ({ questions }: QuestionData) : JSX.Element => {
  const questionCards = questions.map(question => {
    if(!question.difficulty) {
      question.difficulty = "easy"
    }
    return (
        <div className='questions-container' key={question.id}>
          <QuestionCard
            {...question}
          />
        </div>
    )
  })
  return (
    <div className='questions-container'>
      {questionCards}
      {/* <button onClick={() => saveQuestions(id)}>Save</button> */}
    </div>
  )
}

export default Questions;
