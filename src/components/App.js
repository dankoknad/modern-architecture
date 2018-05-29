import React, { Component } from 'react';
import data from '../data.json'
import GoogleMap from './GoogleMap'
import Houses from './Houses'
import Modal from 'react-responsive-modal';
import ModalContent from './ModalContent'

class App extends Component {
  state = {
    data: data.data,
    activeHouse: data.data[3],
    houseForModal: null,
    isModalOppened: false,
    activeCategory: ''
  }

  selectHouse = (house) => {
    if (house.id !== this.state.activeHouse.id) {
      this.setState({ activeHouse: house })
    }
  }

  openModal = (e, house) => {
    e.stopPropagation()
    // console.log(house)

    this.setState({ houseForModal: house, isModalOppened: true })
  }

  closeModal = () => {
    this.setState({ houseForModal: null, isModalOppened: false })
  }

  onCategorySelect = (e) => {
    // console.log(e.target.value)
    this.setState({ activeCategory: e.target.value })
  }

  render() {
    const { data, activeHouse, houseForModal, isModalOppened, activeCategory } = this.state

    return (
      <div className="container">
        <h1 className="">Modern Architecture</h1>
        <div className="row">
          <div className="col s12 m6 xl4">
            <select className="browser-default" onChange={this.onCategorySelect}>
              <option value="" selected >{activeCategory ? 'Reset category' : 'Choose category'}</option>
              <option value="red">red</option>
              <option value="blue">blue</option>
              <option value="orange">orange</option>
            </select>
            <br />
          </div>
        </div>
        
        <div className="row relative">
          <div className="col m12 xl8">
            <Houses
              houses={data}
              activeHouse={activeHouse}
              selectHouse={this.selectHouse}
              openModal={this.openModal}
              activeCategory={activeCategory}
            />
            <div className="">
              {activeHouse
                ? `${activeHouse.name} selected with id: ${activeHouse.id}`
                : 'pls click at some of the houses'
              }
            </div>
          </div>
          <GoogleMap
            houses={data}
            activeHouse={activeHouse}
            selectHouse={this.selectHouse}
            activeCategory={activeCategory}
          />
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
