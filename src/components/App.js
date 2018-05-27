import React, { Component } from 'react';
import data from '../data.json'
import GoogleMap from './GoogleMap'
import Houses from './Houses'
import Modal from 'react-responsive-modal';

class App extends Component {
  state = {
    data: data.data,
    activeHouse: data.data[0],
    houseForModal: null,
    isModalOppened: false
  }

  selectHouse = (house) => {
    if(house.id !== this.state.activeHouse.id) {
      this.setState({activeHouse: house})
    }
  }

  openModal = (e, house) => {
    e.stopPropagation()
    // console.log(house)

    this.setState({houseForModal: house, isModalOppened: true})
  }

  closeModal = () => {
    this.setState({houseForModal: null, isModalOppened: false})
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
              openModal={this.openModal} 
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
        {this.state.houseForModal && 
          <Modal open={this.state.isModalOppened} onClose={this.closeModal} center>
            <h2>{this.state.houseForModal.name}</h2>
            <img src={this.state.houseForModal.img} alt={this.state.houseForModal.name} />
          </Modal>
        }  
      </div>
    );
  }
}

export default App;
