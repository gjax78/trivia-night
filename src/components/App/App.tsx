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


  return (
      <div className="App">
        <p>Trivia</p>
        <Categories />
        <Questions questionsProp={questions} />
      </div>
    )
}

export default App;
