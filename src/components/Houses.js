import React, { Fragment } from 'react'
import House from './House'
import PropTypes from 'prop-types'
import { StaggeredMotion, spring } from 'react-motion'

function Houses({
  houses,
  activeHouse,
  selectHouse,
  openModal,
  activeCategory
}) {
  const filteredHouses = houses.filter(
    house => activeCategory === house.category || !activeCategory
  )
  const defaultStyles = filteredHouses.map(house => ({ h: 0 }))

  const animatedHouses = (
    <StaggeredMotion
      key={defaultStyles.length}
      defaultStyles={defaultStyles}
      styles={prevInterpolatedStyles =>
        prevInterpolatedStyles.map((_, i) => {
          return i === 0
            ? { h: spring(1, { stiffness: 60, damping: 17 }) }
            : {
                h: spring(prevInterpolatedStyles[i - 1].h),
                stiffness: 60,
                damping: 17
              }
        })
      }
    >
      {interpolatingStyles => (
        <Fragment>
          {interpolatingStyles.map((style, i) => (
            <House
              key={filteredHouses[i].id}
              house={filteredHouses[i]}
              activeHouse={activeHouse}
              selectHouse={selectHouse}
              openModal={openModal}
              style={{ opacity: style.h }}
            />
          ))}
        </Fragment>
      )}
    </StaggeredMotion>
  )

  return <div className="row houses">{animatedHouses}</div>
}

Houses.propTypes = {
  houses: PropTypes.array.isRequired,
  activeHouse: PropTypes.object,
  selectHouse: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  activeCategory: PropTypes.string.isRequired
}

export default Houses
