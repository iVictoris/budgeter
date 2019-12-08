import React from 'react'

const Modal = ({className='Modal', type='normal', children, toggleModalState}, render) => {
  return (
    <div className={`${className} ${type}`}>
      {children}
    </div>
  )
}

export default Modal
