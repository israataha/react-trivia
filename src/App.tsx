import * as React from 'react';
import './App.css';

import TriviaCard from './components/TriviaCard';
import logo from './logo.svg';

class App extends React.Component {
  public trivia = {
    "category": "Entertainment: Television",
    "type": "multiple",
    "difficulty": "easy",
    "question": "What NBC sitcom once saw two of its characters try to pitch NBC on a sitcom about nothing?",
    "correct_answer": "Seinfeld",
    "incorrect_answers": [ "Frasier", "Becker", "Friends" ]
  };

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <TriviaCard trivia={this.trivia}/>
      </div>
    );
  }
}

export default App;
