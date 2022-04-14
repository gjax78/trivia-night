import React from "react";
import "./Game.css";
import Questions from "../Questions/Questions";
import QuestionCard from "../QuestionCard/QuestionCard";

const Game = ({favCategory, favQuestion, favCorrectAnswer, favIncorrectAnswers, favDifficulty}) => {
  return (
    <div>
      <h2>{favCategory}</h2>
      <h4>{favQuestion}</h4>
      <p>{favCorrectAnswer}</p>
      <p>{favIncorrectAnswers}</p>
      <p>{favDifficulty}</p>
      {console.log("ISFAV1", favCategory)}
      {console.log("ISFAV2", favQuestion)}
      {console.log("ISFAV3", favCorrectAnswer)}
      {console.log("ISFAV4", favIncorrectAnswers)}
      {console.log("ISFAV5", favDifficulty)}
    </div>
  )
}

export default Game;