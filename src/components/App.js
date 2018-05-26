import React, { Component } from 'react';
import data from '../data.json'
import GoogleMap from './GoogleMap'
import Houses from './Houses'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data.data,
      activeHouse: data.data[0] 
    }
  }

  componentDidMount() {

  }

  selectHouse = (house) => {
    this.setState({activeHouse: house})
  }

  render() {
    const { data, activeHouse } = this.state

    return (
      <div className="container">
        <h1 className="is-size-1">Modern Architecture</h1>
        <div className="columns">
          <div className="column">
            <Houses
              houses={data}
              activeHouse={activeHouse}
              selectHouse={this.selectHouse} 
            />
            <div className="text-center is-size-4">
              {activeHouse 
                ? `${activeHouse.name} selected with id: ${activeHouse.id}`
                : 'pls click at some of the houses'
              }
            </div>
          </div>
          <div className="column">
            <GoogleMap
              houses={data}
              activeHouse={activeHouse}
              selectHouse={this.selectHouse} 
            />
          </div>
        </div>
          
        <pre>{JSON.stringify(data, null, 2)}</pre>   
        
      </div>
    );
  }
}

export default App;
