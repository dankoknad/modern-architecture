import React, { Component } from 'react';
import data from '../data.json'
import GoogleMap from './GoogleMap'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data.data
    }
  }

  componentDidMount() {
    // console.log(this.mapEl)
    // this.mapEl.current.innerHTML = "hello world"

    // this.initMap()



  }

  render() {
    return (
      <div className="">
        <h1>Modern Architecture</h1>
        <GoogleMap data={this.state.data} />
        <pre>{JSON.stringify(data, null, 2)}</pre>   
      </div>
    );
  }
}

export default App;
