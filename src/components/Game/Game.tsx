import React from "react";
import "./Game.css";
import Questions from "../Questions/Questions";
import GameQuestionCard from "../GameQuestionCard/GameQuestionCard";

const Game = ({game, removeFromGame}) => {

 
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
     {gameQuestions}
    </div>
  )
}

export default Game;