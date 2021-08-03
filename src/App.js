import React, { Component } from 'react'
import Calculator from '../src/components/Calculator'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <span className="App-header">
         Calculator
       </span>
       <Calculator />
      </div>
    )
  }
}

export default App



/*  Functional component

import React, { Component } from 'react'
import './App.css';
import Calculator from '../src/components/Calculator'

function App() {
  return (
    <div className="App">
      <span className="App-header">
        Calculator
      </span>
      <Calculator />
    </div>
  );
}

export default App;

*/