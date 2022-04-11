import React from 'react';
import QuestionCard from '../QuestionCard/QuestionCard'

interface Quests {
  questions: [
    {
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
  ]
}

const Questions = ({ questions }: Quests) => {
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
      {/* <button onClick={() => saveQuestions(id)}>Trash</button> */}
    </div>
  )
}

export default Questions;