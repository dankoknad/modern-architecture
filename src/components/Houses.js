import React from 'react'
import House from './House'

function Houses({ houses, selectHouse }) {
  let housesEl = houses.map(house => (
    <House 
      key={house.id} 
      {...house}
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
