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
      title="click to show on map"
    >
      <div className="row">
        <h3>
          {house.name}{' '}
          <em
            className="house__category"
            style={{ color: house.category || 'black' }}
          >
            {house.category}
          </em>
        </h3>
        <div className="col-sm-6">
          <img
            className="img-responsive house__img"
            src={house.img}
            alt={house.name}
          />
        </div>

        <div className="col-sm-6 text-center">
          <p>{house.architect}</p>
          <a
            onClick={e => openModal(e, house)}
            className="btn btn-default btn-xs"
            title="click to show in modal"
          >
            Learn more
          </a>
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
