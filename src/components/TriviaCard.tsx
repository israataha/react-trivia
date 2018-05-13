import {Card} from '@blueprintjs/core';
import * as React from 'react';

interface ITriviaCardProps {
    trivia: {
        category: string;
        type: string;
        difficulty: string;
        question: string;
        correct_answer: string;
        incorrect_answers: string[];
    }
}

class TriviaCard extends React.Component<ITriviaCardProps> {
    public answers = this.randomizedAnswers();
    public handleClick(answer: string) {
        if (answer === this.props.trivia.correct_answer) {
            alert("correct!");
        }
        else {
            alert("wrong!");
        }
        
    }
    public randomizedAnswers(): string[] {
        const randomizedList = this.props.trivia.incorrect_answers;
        // Generate a random number between 0 and 2 to insert the correct answer into
        const index = Math.floor(Math.random()*3);
        randomizedList.splice(index, 0, this.props.trivia.correct_answer);
        return randomizedList;
    }
    public render() {
        return(
        <Card className="trivia-card">
            <p className="trivia-question">{this.props.trivia.question}</p>
            {this.answers.map((answer, i)=> {
                return(<p className="trivia-answer" key={i} onClick={this.handleClick.bind(this, answer)}>{answer}</p>);
            })}
        </Card>);
    }
}

export default TriviaCard;