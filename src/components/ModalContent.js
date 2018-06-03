import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  houseForModal: PropTypes.object.isRequired
}

function ModalContent({ houseForModal }) {
  if (houseForModal.architect) {
    return (
      <Fragment>
        <h1>{houseForModal.buildingName}</h1>
        <h2>{houseForModal.architect}</h2>
        <div dangerouslySetInnerHTML={{ __html: houseForModal.markup }} />
      </Fragment>
    )
  } else {
    return (
      <Fragment>
        <h2>{houseForModal.name}</h2>
        <img src={houseForModal.img} alt={houseForModal.name} />
      </Fragment>
    )
  }
}

ModalContent.propTypes = propTypes

export default ModalContent
