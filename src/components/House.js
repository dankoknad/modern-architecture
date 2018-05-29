import React from 'react'
import PropTypes from 'prop-types';

function House({house, activeHouse, selectHouse, openModal}) {
  const isActive = activeHouse && activeHouse.id === house.id ? "active" : ""
  return (
    <div id={house.id} onClick={() => selectHouse(house)} className={`house col m6 ${isActive}`}>
      <div>{house.name} (category: <em style={{color: house.category}}>{house.category}</em>)</div>
      <img className="responsive-img" src={house.img} alt={house.name}/>
      <a onClick={e => openModal(e, house)} className="btn blue lighten-2">Learn more</a>
    </div>
  )
}

House.propTypes = {
  house: PropTypes.object.isRequired,
  activeHouse: PropTypes.object.isRequired,
  selectHouse: PropTypes.func.isRequired
}

export default House
