import axios from 'axios';
import * as React from 'react';
import './App.css';

import TriviaCards from './components/TriviaCards';
import logo from './logo.svg';
import { TriviaQuestion } from './models/TriviaQuestion';

class App extends React.Component<{}, {questions: TriviaQuestion[]}> {
    
  public trivia = {
    "category": "Entertainment: Television",
    "type": "multiple",
    "difficulty": "easy",
    "question": "What NBC sitcom once saw two of its characters try to pitch NBC on a sitcom about nothing?",
    "correct_answer": "Seinfeld",
    "incorrect_answers": [ "Frasier", "Becker", "Friends" ]
  };

  constructor(props: any) {
    super(props)
    this.state = {
      questions: [this.trivia]  // without setting initial value, we get an error in randomizedAnswers
    };
  }

  componentWillMount() {
    axios.get('https://opentdb.com/api.php?amount=10&type=multiple').then(response => {
      this.setState({questions: response.data.results})
      // tslint:disable-next-line:no-console
      console.log(this.state.questions);
    });
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <TriviaCards trivia={this.state.questions}/>
      </div>
    );
  }
}

export default App;
