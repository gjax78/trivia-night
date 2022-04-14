import React, { useState } from 'react';
import QuestionCard from '../QuestionCard/QuestionCard'
import { QuestionsType as QuestionDataType} from '../App/App'

const Questions = ({ questionsProp }: QuestionDataType) : JSX.Element => {
  
  // const [favorites, setFavorites] = useState([])

  // const addFavorite = (newFavorite) => {
    // const newFavorite = {...favorites}
  //   setFavorites([...favorites, newFavorite])
  // }
  //declare a variable
  //set a state of favorited questions
  //if questions is favorited
  //... addFavorite

  const questionCards = questionsProp.map(question => {
    if(!question.difficulty) {
      question.difficulty = "easy"
    }

    return (
        <div className='questions-container' key={question.id}>
          <QuestionCard
            // favorites={favorites}
            // addFavorites={addFavorite}
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
