import React, { useState, useEffect } from 'react';
import './App.css';
import fetchData from '../../apiCalls'
import { getParsedCommandLineOfConfigFile, isThisTypeNode } from 'typescript';
import { render } from '@testing-library/react';
import Questions from '../Questions/Questions'


interface QuestionData {
  category: string,
  id: string,
  question: string,
  correctAnswer: string,
  incorrectAnswers: Array<string | number>,
  difficulty?: string,
  type: string,
  tags: Array<string>,
  key?: string
}

const App = () => {
  const [questions, setQuestions] = useState <Array<any>>([]);

useEffect(() => {
  fetchData.getData('https://the-trivia-api.com/questions?categories=arts_and_literature&limit=20')
  .then(data => setQuestions(data))
  }, [])

  return (
      <div className="App">
        <p>yo</p>
        <Questions questions={questions}/>
      </div>
    )
}

export default App;
