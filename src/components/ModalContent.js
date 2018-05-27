import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  houseForModal: PropTypes.object.isRequired
}

function ModalContent({houseForModal}) {
  return (
    <div>
      <h2>{houseForModal.name}</h2>
      <img src={houseForModal.img} alt={houseForModal.name} />
    </div>
  )
}

ModalContent.propTypes = propTypes

export default ModalContent
