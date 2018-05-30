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

  renderSelect = () => {
    const categories = this.state.data.reduce((acc, next) => {
      if (acc.indexOf(next.category) === -1) {
        acc.push(next.category)
      }

      return acc
    }, [])

    return (
      <div className="col s12 m6 xl4">
        <select className="browser-default" onChange={this.onCategorySelect}>
          <option key="none" value="">{this.state.activeCategory ? 'Reset category' : 'Choose category'}</option>)
          { categories.map(category => <option key={category} value={category}>{category}</option>) }
        </select>
      </div>
    )
  }

  onCategorySelect = (e) => {
    this.setState({ activeCategory: e.target.value })
  }

  render() {
    const { data, activeHouse, houseForModal, isModalOppened, activeCategory } = this.state
    
    return (
      <div className="container">
        <h1 className="">Modern Architecture</h1>
        <div className="row">
          { this.renderSelect() }
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
