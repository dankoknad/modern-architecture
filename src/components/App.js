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
      <div class="container">
        <h1 className="is-size-1">Modern Architecture</h1>
        <div class="columns">
          <div class="column">
            First column
          </div>
          <div class="column">
            <GoogleMap data={this.state.data} />
          </div>
        </div>
          
        <pre>{JSON.stringify(data, null, 2)}</pre>   
        
      </div>
    );
  }
}

export default App;
