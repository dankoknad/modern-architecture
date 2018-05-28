import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  houseForModal: PropTypes.object.isRequired
}

function ModalContent({houseForModal}) {
  return (
    <Fragment>
      <h2>{houseForModal.name}</h2>
      <img src={houseForModal.img} alt={houseForModal.name} />
    </Fragment>
  )
}

ModalContent.propTypes = propTypes

export default ModalContent
