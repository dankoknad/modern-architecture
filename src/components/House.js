import React from 'react'
import PropTypes from 'prop-types';

function House({ house, activeHouse, selectHouse, openModal }) {
  const isActive = activeHouse && activeHouse.id === house.id ? "active" : ""
  return (
    <div id={house.id} onClick={() => selectHouse(house)} className={`house col-sm-6 ${isActive}`}>
      <p>
        <strong>{house.name}</strong> | category: <em className="house__category" style={{ color: house.category }}>{house.category}</em>
      </p>
      <img className="responsive-img house__img" src={house.img} alt={house.name} />
      <p>
        <a onClick={e => openModal(e, house)} className="btn btn-default btn-xs">Learn more</a>
      </p>
    </div>
  )
}

House.propTypes = {
  house: PropTypes.object.isRequired,
  activeHouse: PropTypes.object,
  selectHouse: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequiredgit
}

export default House
