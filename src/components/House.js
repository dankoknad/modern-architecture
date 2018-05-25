import React from 'react'

function House({name, img, selectHouse}) {
  return (
    <div onClick={selectHouse} className="column is-half">
      <div>{name}</div>
      <img src={img} />
    </div>
  )
}

export default House
