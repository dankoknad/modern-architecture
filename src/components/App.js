import React, { Component } from 'react'
import data from '../data.json'
import GoogleMap from './GoogleMap'
import Houses from './Houses'
import Modal from 'react-responsive-modal'
import ModalContent from './ModalContent'

class App extends Component {
  state = {
    data: data.houses,
    details: data.housesDetails,
    activeHouse: null,
    houseForModal: null,
    isModalOppened: false,
    shouldModalBeCenterd: true,
    activeCategory: ''
  }

  selectHouse = house => {
    this.setState({ activeHouse: house })
  }

  openModal = (e, house) => {
    e.stopPropagation()

    const houseDetails = this.state.details.find(
      houseDetail => houseDetail.id === house.id
    )
    if (houseDetails) {
      this.setState({
        houseForModal: houseDetails,
        isModalOppened: true,
        shouldModalBeCenterd: false
      })
    } else {
      this.setState({
        houseForModal: house,
        isModalOppened: true,
        shouldModalBeCenterd: true
      })
    }
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
      <div className="col-sm-6 col-lg-4">
        <select className="select" onChange={this.onCategorySelect}>
          <option key="none" value="">
            {this.state.activeCategory ? 'Show all' : 'Choose category'}
          </option>)
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    )
  }

  onCategorySelect = e => {
    this.setState({ activeCategory: e.target.value })
  }

  render() {
    const {
      data,
      activeHouse,
      houseForModal,
      isModalOppened,
      activeCategory,
      shouldModalBeCenterd
    } = this.state

    return (
      <div className="container">
        <h1 className="h1">Modern Architecture</h1>
        <div className="row">
          {this.renderSelect()}
          <div className="col-sm-6 col-lg-4">
            {activeHouse ? (
              <div>
                {`id: ${activeHouse.id}, category `}
                <em
                  className="house__category"
                  style={{ color: activeHouse.category }}
                >
                  {activeHouse.category}
                </em>
              </div>
            ) : (
              'Pls click at some house or marker'
            )}
          </div>
        </div>

        <div className="row relative">
          <div className="col-lg-8">
            <Houses
              houses={data}
              activeHouse={activeHouse}
              selectHouse={this.selectHouse}
              openModal={this.openModal}
              activeCategory={activeCategory}
            />
          </div>
          <GoogleMap
            houses={data}
            activeHouse={activeHouse}
            selectHouse={this.selectHouse}
            activeCategory={activeCategory}
          />
        </div>

        <pre>{JSON.stringify(data, null, 2)}</pre>

        {houseForModal && (
          <Modal
            open={isModalOppened}
            onClose={this.closeModal}
            center={shouldModalBeCenterd}
          >
            <ModalContent houseForModal={houseForModal} />
          </Modal>
        )}
      </div>
    )
  }
}

export default App
