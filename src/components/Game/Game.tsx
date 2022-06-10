import React from "react";
import "./Game.css";
import Questions from "../Questions/Questions";
import GameQuestionCard from "../GameQuestionCard/GameQuestionCard";
import { GameProps as GameProps } from '../../utilities/utilities';
import GameEmptyState from "../GameEmptyState/GameEmptyState";

const Game = ({ game, removeFromGame }: GameProps): JSX.Element => {

 
  const gameQuestions = game.map(gameQuestion => {
    return (
      <div key={gameQuestion.id}>
        <GameQuestionCard 
        removeFromGame={removeFromGame}
        {...gameQuestion}
        />
      </div>
    )
  })

  return (
    <div className='game-container'>
      {console.log(gameQuestions)}
      {gameQuestions.length === 0 ?
      <GameEmptyState />
     : gameQuestions}
    </div>
  )
}

export default Game;