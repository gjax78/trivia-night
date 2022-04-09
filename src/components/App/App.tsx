import React, { Component } from 'react';
import './App.css';
import fetchData from '../../apiCalls'
import { isThisTypeNode } from 'typescript';
import { render } from '@testing-library/react';

interface Props {
}

interface State {
  questions: Test
}

interface Test {
  category: string,
  id: string,
  correctAnswer: string,
  incorrectAnswer: any,
  question: string,
  tags: any
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      questions:
        {
          category: '',
          id:'',
          correctAnswer: '',
          incorrectAnswer: [],
          question: '',
          tags:[]
        }
      }
    }
  

  fetchData = () => {
    fetchData.getData('https://the-trivia-api.com/questions?categories=arts_and_literature&limit=20')
    .then(data => this.setState({questions: data.results}))
    console.log(this.state.questions)
    }

  componentDidMount = () => this.fetchData();

  render() {
    {console.log(this.state.questions)}
    return (
      <div className="App">
        <p>{this.state.questions}</p>
      </div>
    );

  }
}

export default App;