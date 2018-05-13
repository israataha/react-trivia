import * as React from 'react';
import { TriviaQuestion } from '../models/TriviaQuestion';
import TriviaCard from './TriviaCard';

interface TriviaCardsProps {
    trivia: TriviaQuestion[];
}
class TriviaCards extends React.Component<TriviaCardsProps> {
    public render() {
        return(<TriviaCard question={this.props.trivia[0]}/>);
    }
}

export default TriviaCards;