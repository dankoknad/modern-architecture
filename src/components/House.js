import React from 'react'

function House({name, img, selectHouse}) {
  return (
    <div onClick={selectHouse} className="column is-half house">
      <div>{name}</div>
      <img src={img} alt={name}/>
    </div>
  )
}

export default House
