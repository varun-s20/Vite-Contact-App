import React from 'react'
import { createPortal } from 'react-dom'
import { FaWindowClose } from 'react-icons/fa'

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
        {isOpen && (
        <>
            <div className='m-auto relative z-50 min-h-[215px] max-w-[80%] bg-white rounded-lg'>
                <div className='flex justify-end p-2'>
                    <FaWindowClose onClick={onClose} className='cursor-pointer text-2xl'/>
                </div>
                {children}
            </div>
            <div onClick={onClose} className='absolute top-0 z-40 h-screen w-screen backdrop-blur'/>
        </>
        )}
    </>, 
    document.getElementById("modal-root")
  )
}

export default Modal