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
  //
  // onChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
  //    const newValue = e.target.value;
  // }
  //
const getCategory = (category: string) => {
  fetchCategory(category)
  }

  // useEffect(() => {
  // }, [])

  return (
    <div className='button-container'>
      <button
      className='arts-and-literature'
      value={'arts_and_literature'}
      onClick={(event) => handleClick(event)}>Arts & Literature</button>
      <button className='film-and-tv'
      value={'film_and_tv'}
      onClick={(event) => handleClick(event)}>Film & TV</button>
      <button className='food-and-drink'
      value={'food_and_drink'}
      onClick={(event) => handleClick(event)}>Food & Drink</button>
      <button
      className='general-knowledge'
      value={'general_knowledge'}
      onClick={(event) => handleClick(event)}>General Knowledge</button>
      <button className='geography'
      value={'geography'}
      onClick={(event) => handleClick(event)}>Geography</button>
      <button className='history'
      value={'history'}
      onClick={(event) => handleClick(event)}>History</button>
      <button className='music'
      value={'music'}
      onClick={(event) => handleClick(event)}>Music</button>
      <button className='science'
      value={'science'}
      onClick={(event) => handleClick(event)}>Science</button>
      <button className='society-and-culture'
      value={'society_and_culture'}
      onClick={(event) => handleClick(event)}>Society & Culture</button>
      <button className='sports-and-leisure'
      value={'sports_and_leisure'}
      onClick={(event) => handleClick(event)}>Sports & Leisure</button>
    </div>
  )
}

export default Categories
