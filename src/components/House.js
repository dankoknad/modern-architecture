import React from 'react'
import PropTypes from 'prop-types'

function House({ house, activeHouse, selectHouse, openModal, style }) {
  const isActive = activeHouse && activeHouse.id === house.id ? 'active' : ''
  return (
    <div
      id={house.id}
      onClick={() => selectHouse(house)}
      className={`house col-sm-6 ${isActive}`}
      style={style}
    >
      <div className="row">
        <h3>
          {house.name}{' '}
          <em className="house__category" style={{ color: house.category }}>
            {house.category}
          </em>
        </h3>
        <div className="col-sm-6">
          <img
            height="100"
            className="responsive-img house__img"
            src={house.img}
            alt={house.name}
          />
        </div>

        <div className="col-sm-6">
          <p>
            <a
              onClick={e => openModal(e, house)}
              className="btn btn-default btn-xs"
            >
              Learn more
            </a>
          </p>
        </div>
        {/* .col-sm-6 */}
      </div>
      {/* .row */}
    </div>
  )
}

House.propTypes = {
  house: PropTypes.object.isRequired,
  activeHouse: PropTypes.object,
  selectHouse: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired
}

export default House
