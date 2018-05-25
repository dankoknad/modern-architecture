import React, { Component } from 'react';
import data from '../data.json'
import GoogleMap from './GoogleMap'
import Houses from './Houses'

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
    const { data } = this.state

    return (
      <div className="container">
        <h1 className="is-size-1">Modern Architecture</h1>
        <div className="columns">
          <div className="column">
            <Houses houses={data}/>
          </div>
          <div className="column">
            <GoogleMap houses={data} />
          </div>
        </div>
          
        <pre>{JSON.stringify(data, null, 2)}</pre>   
        
      </div>
    );
  }
}

export default App;
