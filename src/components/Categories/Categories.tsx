import React, { useState, useEffect } from 'react';
import { QuestionsType as CategoriesDataType } from '../App/App';
import fetchData from '../../apiCalls';
import { Route, Link, Switch } from 'react-router-dom';
import Questions from '../Questions/Questions';
import './Categories.css';

interface Card {
  onClick: React.MouseEvent<HTMLButtonElement>;
}

const Categories = ( { fetchCat } ) => {

  return (
    <div className='button-container'>
    <Link to='/questions'>
      <button
      className='arts-and-literature'
      value={'arts_and_literature'}
      onClick={() => fetchCat('arts_and_literature')}>Arts & Literature</button>
    </Link>
    <Link to='/questions'>
      <button className='film-and-tv'
      value={'film_and_tv'}
      onClick={() => fetchCat('film_and_tv')}>Film & TV</button>
    </Link>
    <Link to='/questions'>
      <button className='food-and-drink'
      value={'food_and_drink'}
      onClick={() => fetchCat('food_and_drink')}>Food & Drink</button>
    </Link>
    <Link to='/questions'>
      <button
      className='general-knowledge'
      value={'general_knowledge'}
      onClick={() => fetchCat('general-knowledge')}>General Knowledge</button>
    </Link>
    <Link to='/questions'>
      <button className='geography'
      value={'geography'}
      onClick={() => fetchCat('geography')}>Geography</button>
    </Link>
    <Link to='/questions'>
      <button className='history'
      value={'history'}
      onClick={() => fetchCat('history')}>History</button>
    </Link>
    <Link to='/questions'>
      <button className='music'
      value={'music'}
      onClick={() => fetchCat('music')}>Music</button>
    </Link>
    <Link to='/questions'>
      <button className='science'
      value={'science'}
      onClick={() => fetchCat('science')}>Science</button>
    </Link>
    <Link to='/questions'>
      <button className='society-and-culture'
      value={'society_and_culture'}
      onClick={() => fetchCat('society_and_culture')}>Society & Culture</button>
    </Link>
    <Link to='/questions'>
      <button className='sport-and-leisure'
      value={'sport_and_leisure'}
      onClick={() => fetchCat('sport_and_leisure')}>Sports & Leisure</button>
    </Link>
      <section className='top-row'>
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
      </section>
      <section className='lower-row'>  
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
        onClick={(event) => handleClick(event, 'society_and_culture')}>Society & Culture</button>
        <button className='sport-and-leisure'
        value={'sport_and_leisure'}
        onClick={(event) => handleClick(event, 'sport_and_leisure')}>Sports & Leisure</button>
      </section>
    </div>
  )
}

export default Categories
