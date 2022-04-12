import React from 'react';
import QuestionCard from '../QuestionCard/QuestionCard'
import { QuestionData as QuestionData} from '../App/App'

const Questions = ({ questions }: QuestionsData) => {
  const questionCards = questions.map(question => {
    if(!question.difficulty) {
      question.difficulty = "easy"
    }
    return (
        <div className='ideas-container'>
          <QuestionCard
            category={question.category}
            id={question.id}
            question={question.question}
            correctAnswer={question.correctAnswer}
            incorrectAnswers={question.incorrectAnswers}
            difficulty={question.difficulty}
            type={question.type}
            tags={question.tags}
            key={question.id}
          />
        </div>
    )
  })
  return (
    <div>
      {questionCards}
      {/* <button onClick={() => saveQuestions(id)}>Save</button> */}
    </div>
  )
}

export default Questions;
