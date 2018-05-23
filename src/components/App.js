import React, { Component } from 'react';
import data from '../data.json'

class App extends Component {
  render() {
    return (
      <div className="">
        <h1>Modern Architecture</h1>  
        <pre>{JSON.stringify(data, null, 2)}</pre>   
      </div>
    );
  }
}

export default App;
