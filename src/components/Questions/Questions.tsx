import React from 'react';
import QuestionCard from '../QuestionCard/QuestionCard'

interface Quests {
  category: string,
  id: string,
  question: string,
  correctAnswer: string,
  incorrectAnswers: Array<any>,
  difficulty: string,
  type: string,
  tags: Array<any>,
  key: string
}


const Questions: Array<any> = ({ questions }) => {
  const questionCards = questions.map(question => {
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
      {/* <button onClick={() => saveQuestions(id)}>Trash</button> */}
    </div>
  )
}

export default Questions;