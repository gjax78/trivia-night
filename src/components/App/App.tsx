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
  const [questionsState, setQuestionsState] = useState <QuestionDataType[]>([]);

useEffect(() => {
  fetchData.getData('https://the-trivia-api.com/questions?categories=arts_and_literature&limit=20')
  .then(data => setQuestionsState(data))
  }, [])

  return (
      <div className="App">
        <p>yo</p>
        <Questions questionsProp={questionsState}/>
        <Categories />
      </div>
    )
}

export default App;
