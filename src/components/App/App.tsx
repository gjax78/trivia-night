import { Component } from 'react';
import './App.css';
import fetchData from '../../apiCalls'
import { isThisTypeNode } from 'typescript';
import { render } from '@testing-library/react';
import Questions from '../Questions/Questions'

import data from '../../data';

interface Props {}

interface State {
  questions: Array<any>
}

interface Question {
  category: string,
  id: string,
  correctAnswer: string,
  incorrectAnswers: any,
  question: string,
  type: string,
  tags: any,
  difficulty: string
}

class App extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      questions: []
    }
  }
  
  // fetchData = () => {
  //   fetchData.getData('https://the-trivia-api.com/questions?categories=arts_and_literature&limit=20')
  //   .then(data => this.setState({questions: data}))
  //   console.log("first")
  //   }

  // componentDidMount = () => this.fetchData();

  componentDidMount = () => this.setState({questions: data});

  render() {
    {console.log(data)}
    return (
      <div className="App">
        <p>yo</p> 
        <Questions questions={this.state.questions}/>
      </div>
    );

  }
}

export default App;