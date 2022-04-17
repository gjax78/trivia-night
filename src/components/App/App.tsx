import React, { useState, useEffect } from 'react';
import './App.css';
import fetchData from '../../apiCalls';
import { getParsedCommandLineOfConfigFile, isThisTypeNode } from 'typescript';
import { render } from '@testing-library/react';
import Questions from '../Questions/Questions';
import Categories from '../Categories/Categories';
import { Route, Switch } from 'react-router-dom';
import Game from '../Game/Game';
import Header from '../Header/Header'




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
  const [game, setGame] = useState([])

  const fetchCategory = (category: string) => {
    fetchData.getData(`https://the-trivia-api.com/questions?categories=${category}&limit=20`)
    .then(data => setQuestionState(data));
  }

  const addToGame = (likedQuestion) => {
    setGame([...game, likedQuestion])
  }

  const removeFromGame = (id) => {
    const filteredGame = game.filter(question => question.id != id);

    setGame(filteredGame);
  }

  return (
    <Switch>
      <Route exact path='/'>
        <Header />
        <Categories fetchCat={fetchCategory}/>
      </Route>
      <Route exact path='/questions'>
        <Header />
        <Questions 
          questionsProp={questionsState}
          addToGame={addToGame} 
        />
      </Route>
      <Route exact path='/game'>
        <Header />
        <Game 
          game={game} 
          removeFromGame={removeFromGame}
        />
      </Route>
    </Switch>
    )
}

export default App;
