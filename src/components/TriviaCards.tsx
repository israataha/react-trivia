import {Button, ProgressBar} from '@blueprintjs/core';
import * as React from 'react';
import { TriviaQuestion } from '../models/TriviaQuestion';
import TriviaCard from './TriviaCard';

interface TriviaCardsProps {
    trivia: TriviaQuestion[];
}
class TriviaCards extends React.Component<TriviaCardsProps, {currentQuestion: number}> {
    constructor(props: TriviaCardsProps) {
        super(props);
        this.state = {
            currentQuestion: 0
        }
    }
    public nextQuestion = () => {
        this.setState({currentQuestion: this.state.currentQuestion+1});
    }
    public render() {
        return(
            <div className="trivia">
                <p> Question {this.state.currentQuestion + 1} of {this.props.trivia.length} </p>
                <ProgressBar animate={false} stripes={false} value={(this.state.currentQuestion + 1)/this.props.trivia.length}/>
                <TriviaCard question={this.props.trivia[this.state.currentQuestion]}/>
                <Button text="Next" onClick={this.nextQuestion}/>
            </div>            
        );
    }
}

export default TriviaCards;