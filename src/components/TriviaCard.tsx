import {Card} from '@blueprintjs/core';
import * as React from 'react';
import { TriviaQuestion } from '../models/TriviaQuestion';

interface TriviaCardProps {
    question: TriviaQuestion
}
interface TriviaCardState {
    selectedAnswer: string
}
class TriviaCard extends React.Component<TriviaCardProps, TriviaCardState> {
    // public answers = this.randomizedAnswers();
    constructor(props: TriviaCardProps) {
        super(props);
        this.state = {
            selectedAnswer: ''
        }
    }
    public handleClick(answer: string) {
        this.setState({selectedAnswer: answer});
    }
    /*public randomizedAnswers(): string[] {
        const randomizedList = this.props.question.incorrect_answers;
        // Generate a random number between 0 and 2 to insert the correct answer into
        const index = Math.floor(Math.random()*3);
        randomizedList.splice(index, 0, this.props.question.correct_answer);
        return randomizedList;
    }*/
    public render() {
        return(
        <Card className="trivia-card">
            <p className="trivia-question">{this.props.question.question}</p>
            {this.props.question.incorrect_answers.map((answer, i)=> {
                return(<p className={this.state.selectedAnswer === answer ? 'wrong-answer trivia-answer': 'trivia-answer'} key={i} onClick={this.handleClick.bind(this, answer)}>{answer}</p>);
            })}
            <p className={this.state.selectedAnswer === this.props.question.correct_answer ? 'correct-answer trivia-answer': 'trivia-answer'} onClick={this.handleClick.bind(this, this.props.question.correct_answer)}>{this.props.question.correct_answer}</p>
        </Card>);
    }
}

export default TriviaCard;