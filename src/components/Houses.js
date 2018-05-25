import React from 'react'
import House from './House'

function Houses({ houses }) {
  let housesEl = houses.map(house => (
    <div key={house.id}  className="column is-half ">
      <div>{house.name}</div>
      <img src={house.img} />
    </div>
  ))
  return (
    <div className="columns is-multiline">
      {housesEl}
    </div>
  )
}

export default Houses
