import React from 'react'
import PropTypes from 'prop-types';

function House({house, activeHouse, selectHouse, openModal}) {
  const isActive = activeHouse && activeHouse.id === house.id ? "active" : ""
  return (
    <div onClick={() => selectHouse(house)} className={`column is-half house ${isActive}`}>
      <div>{house.name}</div>
      <img src={house.img} alt={house.name}/>
      <a onClick={e => openModal(e, house)} className="button">Button</a>
    </div>
  )
}

House.propTypes = {
  house: PropTypes.object.isRequired,
  activeHouse: PropTypes.object.isRequired,
  selectHouse: PropTypes.func.isRequired
}

export default House
