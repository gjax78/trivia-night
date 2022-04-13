// The homepage holds all the categories
// User clicks the category -> state is assigned
// Each category assigns the state to the clicked cateogry type
// Create a fetch function that would use state(category) to interpolate URL based on click
// useEffect would call the fetch function
// return all buttons for each category
// pass category to Questions via props
//quests be displayed yo

//App shows Cateogories component
//Cateogires show Questions component
//Button on Questions to save questions to Game component

import React, { useState, useEffect } from 'react'
import { QuestionsType as CategoriesDataType } from '../App/App'
import fetchData from '../../apiCalls'


interface Card {
  onClick: React.MouseEvent<HTMLButtonElement>;
}

const Categories = () => {
  const [categories, setCategories] = useState([])

  const fetchCategory = (cat: string) => {
    fetchData.getData(`https://the-trivia-api.com/questions?categories=${cat}&limit=20`)
    .then(data => setCategories(data))
  }

  const handleClick = (event) => {
    event.preventDefault()
    // event.target.value === event.target.value
    // fetchCategory(event.target.value)
    // setCategories(event.target.value)
    // setCategories(event.target.value)
    console.log('clicked')
    console.log(categories)
    doTheThing()
  }
  //
  // onChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
  //    const newValue = e.target.value;
  // }
  //
const doTheThing = () => {
  fetchCategory(event.target.value)
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
