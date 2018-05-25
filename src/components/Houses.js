import React from 'react'
import House from './House'

function Houses({ houses, activeHouse, selectHouse }) {
  let housesEl = houses.map(house => (
    <House 
      key={house.id} 
      house={house}
      activeHouse={activeHouse}
      selectHouse={() => selectHouse(house)}
    />
  ))
  return (
    <div className="columns is-multiline">
      {housesEl}
    </div>
  )
}

export default Houses
