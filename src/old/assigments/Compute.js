import React, { Component } from 'react'
import Question from './assignment01/Question';
import Solution from './assignment01/Solution';

export class Compute extends Component {
    state= {
        showAnswers: false
    }
    
    toggleAnswer = () => {
        this.setState({
            showAnswers: !this.state.showAnswers
        })
    }

    render() {
        const { showAnswers } = this.state;
        return (
            <div>
                <Question></Question>
                <button onClick={this.toggleAnswer}>{showAnswers ? 'Hide Answer' : 'Check Answer'}</button>
                {!!this.state.showAnswers && <div className="solution"><Solution/></div>}
            </div>
        )
    }
}

export default Compute
