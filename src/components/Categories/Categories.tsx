import React, { useState, useEffect } from 'react'
import { QuestionsType as CategoriesDataType } from '../App/App'
import fetchData from '../../apiCalls'


interface Card {
  onClick: React.MouseEvent<HTMLButtonElement>;
}

const Categories = () => {
  const [questionsState, setQuestionsState] = useState <QuestionDataType[]>([]);

  const fetchCategory = (cat: string) => {
      fetchData.getData('https://the-trivia-api.com/questions?categories=arts_and_literature&limit=20')
    .then(data => setQuestionsState(data))
    }

  const handleClick = (event: React.ChangeEvent, category: string) => {
    event.preventDefault()
    getCategory(category)
  }

const getCategory = (category: string) => {
  fetchCategory(category)
  }

  return (
    <div className='button-container'>
      <button
      className='arts-and-literature'
      value={'arts_and_literature'}
      onClick={(event) => handleClick(event, 'arts_and_literature')}>Arts & Literature</button>
      <button className='film-and-tv'
      value={'film_and_tv'}
      onClick={(event) => handleClick(event, 'film_and_tv')}>Film & TV</button>
      <button className='food-and-drink'
      value={'food_and_drink'}
      onClick={(event) => handleClick(event, 'food_and_drink')}>Food & Drink</button>
      <button
      className='general-knowledge'
      value={'general_knowledge'}
      onClick={(event) => handleClick(event, 'general-knowledge')}>General Knowledge</button>
      <button className='geography'
      value={'geography'}
      onClick={(event) => handleClick(event, 'geography')}>Geography</button>
      <button className='history'
      value={'history'}
      onClick={(event) => handleClick(event, 'history')}>History</button>
      <button className='music'
      value={'music'}
      onClick={(event) => handleClick(event, 'music')}>Music</button>
      <button className='science'
      value={'science'}
      onClick={(event) => handleClick(event, 'science')}>Science</button>
      <button className='society-and-culture'
      value={'society_and_culture'}
      onClick={(event) => handleClick(event, 'society-and-culture')}>Society & Culture</button>
      <button className='sports-and-leisure'
      value={'sports_and_leisure'}
      onClick={(event) => handleClick(event, 'sports-and-leisure')}>Sports & Leisure</button>
    </div>
  )
}

export default Categories
