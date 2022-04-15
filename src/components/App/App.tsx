import React, { useState, useEffect } from 'react';
import './App.css';
import fetchData from '../../apiCalls';
import { getParsedCommandLineOfConfigFile, isThisTypeNode } from 'typescript';
import { render } from '@testing-library/react';
import Questions from '../Questions/Questions';
import Categories from '../Categories/Categories';
import { Route, Switch } from 'react-router-dom';
import Game from '../Game/Game';

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

  const fetchCategory = (category: string) => {
    fetchData.getData(`https://the-trivia-api.com/questions?categories=${category}&limit=20`)
    .then(data => setQuestionState(data));
  }
  return (
    <Switch>
      <Route exact path='/'>
        <Categories fetchCat={fetchCategory}/>
      </Route>
      <Route exact path='/questions'>
        <Questions questionsProp={questionsState}/>
      </Route>
      <Route exact path='/game'>
        <Game />
      </Route>
    </Switch>
    )
}

export default App;
