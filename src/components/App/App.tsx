import React, { useState, useEffect } from 'react';
import './App.css';
import fetchData from '../../apiCalls'
import { getParsedCommandLineOfConfigFile, isThisTypeNode } from 'typescript';
import { render } from '@testing-library/react';
import Questions from '../Questions/Questions'
import Categories from '../Categories/Categories'

export interface QuestionsType {
  questionsProp: QuestionDataType[]
}

export interface QuestionDataType {
  category: string,
  id: string,
  question: string,
  correctAnswer: string,
  incorrectAnswers: Array<string>,
  difficulty?: string,
  type: string,
  tags: Array<string>,
  key?: string
}

const App = () => {	
  const [questionsState, setQuestionState] = useState<QuestionDataType[]>([]);	
  const handleClick = (event: React.ChangeEvent, category: string) => {	
    event.preventDefault();	
    getCategoryQuestions(category);	
  }	
  	
  const getCategoryQuestions = (category: string) => {	
    fetchCategory(category)	
  }	
  const fetchCategory = (category: string) => {	
    fetchData.getData(`https://the-trivia-api.com/questions?categories=${category}&limit=20`)	
    .then(data => setQuestionState(data));	
  }	
  return (	
      <div className="App">	
      <Categories handleClick={handleClick}/>	
      <Questions questionsProp={questionsState}/>	
      </div>
    )
}

export default App;
