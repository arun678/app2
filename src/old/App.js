import React, { Component } from 'react'



class App extends Component {
    state = {
      items: ["A", "B", "C"]
    }
    orderChangeHandler = (index) => {
        const newItems = [...this.state.items];
        console.log(newItems[index])
    }
    render() {
      const listUI = this.state.items.map((el,index) => (
        <li key={index} onClick={() => this.orderChangeHandler(index)}>{el}</li>
      ))
      return <ul>{listUI}</ul>
    }
  }
  export default App;