import React, { Component } from 'react';
import data from '../data.json'
import GoogleMap from './GoogleMap'
import Houses from './Houses'
import Modal from 'react-responsive-modal';
import ModalContent from './ModalContent'

class App extends Component {
  state = {
    data: data.data,
    activeHouse: data.data[0],
    houseForModal: null,
    isModalOppened: false,
    activeCategory: ''
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

  onCategorySelect = (e) => {
    // console.log(e.target.value)
    this.setState({activeCategory: e.target.value})
  }

  render() {
    const { data, activeHouse, houseForModal, isModalOppened, activeCategory } = this.state

    return (
      <div className="container">
        <h1 className="is-size-1">Modern Architecture</h1>
        <div className="columns">
          <select onChange={this.onCategorySelect}>
            <option value="" selected >Choose/reset category</option>
            <option value="red">red</option>
            <option value="blue">blue</option>
          </select>
          <br/>
        </div>
        <div className="columns">
          <div className="column is-half">
            <Houses
              houses={data}
              activeHouse={activeHouse}
              selectHouse={this.selectHouse}
              openModal={this.openModal}
              activeCategory={activeCategory}
            />
            <div className="text-center is-size-4">
              {activeHouse 
                ? `${activeHouse.name} selected with id: ${activeHouse.id}`
                : 'pls click at some of the houses'
              }
            </div>
          </div>
          <div className="column is-4 is-offset-5 fixed">
            <GoogleMap
              houses={data}
              activeHouse={activeHouse}
              selectHouse={this.selectHouse}
              activeCategory={activeCategory}
            />
          </div>
        </div>
          
        <pre>{JSON.stringify(data, null, 2)}</pre>
         
        {houseForModal && 
          <Modal
            open={isModalOppened}
            onClose={this.closeModal}
            center
          >
            <ModalContent
              houseForModal={houseForModal}
            />
          </Modal>  
        }  
      </div>
    );
  }
}

export default App;
