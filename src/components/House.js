import React from 'react'
import PropTypes from 'prop-types';

function House({ house, activeHouse, selectHouse, openModal }) {
  const isActive = activeHouse && activeHouse.id === house.id ? "active" : ""
  return (
    <div id={house.id} onClick={() => selectHouse(house)} className={`house col-sm-6 ${isActive}`}>
      <h3>{house.name} (category: <em style={{ color: house.category }}>{house.category}</em>)</h3>
      <img className="responsive-img" src={house.img} alt={house.name} />
      <p>
        <a onClick={e => openModal(e, house)} className="btn btn-default btn-xs">Learn more</a>
      </p>
    </div>
  )
}

House.propTypes = {
  house: PropTypes.object.isRequired,
  activeHouse: PropTypes.object,
  selectHouse: PropTypes.func.isRequired
}

export default House
