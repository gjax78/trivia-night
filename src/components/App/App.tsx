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
import { QuestionDataType as QuestionDataType } from '../../utilities/utilities';
import { LikedQuestion as LikedQuestion } from '../../utilities/utilities';
import { CategoryFetch as CategoryFetch } from '../../utilities/utilities';
import { AddQuestion as AddQuestion } from '../../utilities/utilities';

const App = () => {
  const [questionsState, setQuestionState] = useState<QuestionDataType[]>([]);
  const [game, setGame] = useState<QuestionDataType[] | LikedQuestion[]>([])

  const fetchCategory:  CategoryFetch = (category) => {
    fetchData.getData(`https://the-trivia-api.com/questions?categories=${category}&limit=20`)
    .then(data => setQuestionState(data));
  }

  const addToGame: AddQuestion = (likedQuestion) => {
    setGame([...game, likedQuestion])
  }

  const removeFromGame = (id : string): void => {
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
          removeFromGame={removeFromGame} 
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
