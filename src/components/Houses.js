import React from 'react'
import House from './House'
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

function Houses({ houses, activeHouse, selectHouse, openModal, activeCategory }) {
  let housesEl = houses.map(house => {
    return activeCategory === house.category || !activeCategory
      ? <House
        key={house.id}
        house={house}
        activeHouse={activeHouse}
        selectHouse={selectHouse}
        openModal={openModal}
      />
      : null
  })
  return (
    <div className="row houses">
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        {housesEl}
      </ReactCSSTransitionGroup>
    </div>
  )
}

Houses.propTypes = {
  houses: PropTypes.array.isRequired,
  activeHouse: PropTypes.object,
  selectHouse: PropTypes.func.isRequired,
  activeCategory: PropTypes.string.isRequired
}

export default Houses
