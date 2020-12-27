import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>It is really working!</p>
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
      </div>
    );

    // Section 3. Lesson 6. Using non JSX code style to create header h1 inside div
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Hi, I\'m a react app with non jsx code style'));

  }
} 

export default App;
