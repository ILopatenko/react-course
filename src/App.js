import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  state = {
    persons: [
      {name: 'Karl1', age: 25},
      {name: 'John1', age: 19},
      {name: 'Kate1', age: 35},
      {name: 'Jane1', age: 70},
    ],
    otherState: 'Some value for otherState'
  };
  switchNameHandler = () => {
    //console.log('switchNameHandler is working');
    //DON'T DO THIS: this.state.persons[0].`name = 'Iurii';
    this.setState({
      persons: [
        {name: 'Iurii', age: 40},
        {name: 'Stepan', age: 37},
        {name: 'Kate1', age: 35},
        {name: 'Jane1', age: 70},
      ]
    })
  };
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a new React app</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch names</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> My hoobies: Racing </Person>
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age}/>
      </div>
    );
  }
}
export default App;
