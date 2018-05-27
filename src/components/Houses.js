import React from 'react'
import House from './House'
import PropTypes from 'prop-types';

function Houses({ houses, activeHouse, selectHouse, openModal }) {
  let housesEl = houses.map(house => (
    <House 
      key={house.id} 
      house={house}
      activeHouse={activeHouse}
      selectHouse={selectHouse}
      openModal={openModal}
    />
  ))
  return (
    <div className="columns is-multiline">
      {housesEl}
    </div>
  )
}

Houses.propTypes = {
  houses: PropTypes.array.isRequired,
  activeHouse: PropTypes.object.isRequired,
  selectHouse: PropTypes.func.isRequired
}

export default Houses
