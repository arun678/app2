import React, { Component } from "react";
import './Person.module.css';

class Person extends Component {
    state={
        toggleToolTip: 'none'
    }
  handleMouseOver= () => {
    this.setState({
        toggleToolTip: 'inline'
    })
  }
  handleMouseOut= () => {
    this.setState({
        toggleToolTip: 'none'
    })
  }
  render() {
      const {toggleToolTip} = this.state;
    return (
      <div className="person-wrapper">
        <div style={{ textAlign: "left", position:'relative'}}>
          <span style={{display: toggleToolTip, fontSize:'10px', position:'absolute', top:'-15px', left:"0",  backgroundColor:'#eee', color:"#333", padding:'5px', borderRadius:'4px'}}>Change name</span>
          <p
            onClick={this.props.click}
            style={{ cursor: "pointer", title: "change name" }}
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}
          >
            I am {this.props.name} aged {this.props.age} years
          </p>
          <p>{this.props.children}</p>
          <input type="text" value={this.props.name} onChange={this.props.changeName}/>
        </div>
        <div
          style={{
            color: "darkred",
            fontWeight: "bolder",
            fontSize: "20px",
            cursor: "pointer",
          }}
          onClick={this.props.delete}
        >
          X
        </div>
      </div>
    );
  }
}

export default Person;
