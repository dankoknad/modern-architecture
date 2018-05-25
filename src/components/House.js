import React from 'react'

function House({house, activeHouse, selectHouse}) {
  const isActive = activeHouse && activeHouse.id === house.id ? "active" : ""
  return (
    <div onClick={selectHouse} className={`column is-half house ${isActive}`}>
      <div>{house.name}</div>
      <img src={house.img} alt={house.name}/>
    </div>
  )
}

export default House
