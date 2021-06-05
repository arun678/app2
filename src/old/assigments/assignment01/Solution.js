import React, { Component } from 'react'
import ValidationComponent from './components/ValidationComponent';
import CharComponent from './components/CharComponent';

export class Solution extends Component {
    state= {
        textField: ''
    }
    changeInputHandler = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }
    deleteCharHandler = (index) => {
        let value = this.state.textField;
        value = value.split('');
        value.splice(index, 1);
        console.log('value', value);
        console.log('state value', this.state.textField);
        const mergeValue = value.join('');
        this.setState({
            textField: mergeValue
        })
    }
    render() {
        const { textField } = this.state;
        const charSet = textField.split('').map((char, index) =>
            <CharComponent deleteChar={() => this.deleteCharHandler(index)} key={index} character={char}></CharComponent>
        )

        return (
            <div style={{marginTop: "10px"}}>
                <input type="text" name="textField" value={textField} onChange={this.changeInputHandler}></input>
                <p>The length of the input value is: {textField.length}</p>
                <ValidationComponent textLength={textField.length}/>
                <div style={{display: "flex"}}>{charSet}</div>
            </div>
        )
    }
}

export default Solution
