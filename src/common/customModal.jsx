import React from 'react'
import PropTypes from 'prop-types'
import Modal, { ModalItem } from './modal'

const CustomModal = ({ title, body, options, closeModal }) => {
  return (
    <Modal closeModal={closeModal}>
      <ModalItem item="content">
        <ModalItem item="header">{title}</ModalItem>
        <ModalItem item="body">{body}</ModalItem>
        <ModalItem item="footer">{options}</ModalItem>
      </ModalItem>
    </Modal>
  )
}

CustomModal.propTypes = {
  title: PropTypes.any,
  body: PropTypes.any,
  options: PropTypes.any,
  closeModal: PropTypes.func
}

export default CustomModal
