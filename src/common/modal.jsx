import React from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'

const Modal = ({ children, closeModal }) => {
  return createPortal(
    <>
      <div
        className="modal show"
        tabIndex="-1"
        role="dialog"
        style={{ display: 'block', paddingRight: '17px' }}
        onClick={closeModal}
      >
        <div className='modal-dialog' onClick={ e => e.stopPropagation() } item={'dialog'}>
          {children}
        </div>
      </div>
      <ModalItem item={'backdrop show'} />
    </>,
    document.querySelector('#modal')
  )
}

export const ModalItem = ({ children, item }) => {
  return <div className={`modal-${item}`}>{children}</div>
}

Modal.propTypes = {
  children: PropTypes.any
}

ModalItem.propTypes = {
  children: PropTypes.any,
  item: PropTypes.string
}

export default Modal
