import React from 'react';
import PropTypes from 'prop-types';

  // function Question(props) {
  //   return (
  //     <h2 className="question">{props.content}</h2>
  //   );
  // }
  // Question.propTypes = {
  //   content: PropTypes.string.isRequired
  // };
  // export default Question;

  // const List = (props) => {
  //   const listUI = props.items.map(el => <li>{el}</li>)
  //   return <ul>{listUI}</ul>
  // }
  // export default List

  import React, { Component } from 'react'
  
  export class Question extends Component {
    state = {
      items=["A", "B", "C"]
    }
    orderChangeHandler = () => {

    }
    render() {
      this.state.items.map((el,index) => (
        <li key={index} onClick={props.orderChangeHandler(index)}>{el}</li>
      ))
      return <ul>{listUI}</ul>
    }
  }
  
  export default Question
  