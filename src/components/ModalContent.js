import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  houseForModal: PropTypes.object.isRequired
}

function ModalContent({ houseForModal }) {
  if (houseForModal.architect) {
    return (
      <Fragment>
        <h2 className="modal-h2">{houseForModal.buildingName}</h2>
        <div className="text-right">
          Architect:
          <em> {houseForModal.architect}</em>
        </div>
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
