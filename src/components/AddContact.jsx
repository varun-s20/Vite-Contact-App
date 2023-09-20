import React from 'react'
import Modal from './Modal'

const AddContact = ({ isOpen, onClose }) => {
  return (
    <div>
        <Modal isOpen={isOpen}
        onClose={onClose}
        >
            Hi
        </Modal>
    </div>
  )
}

export default AddContact