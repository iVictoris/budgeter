import React, {useState} from 'react'
import Backdrop from './Backdrop';

const useModalState = (state) => {
  let [modalState, setModalState] = useState(state);
  const toggleModalState = () => {
    setModalState(!modalState)
  }

  return [modalState, toggleModalState]
}

const ModalContainer = ({defaultModalState = false, className = 'ModalContainer', children}) => {
  const [modalState, toggleModalState] = useModalState(defaultModalState)
  console.log(modalState);
  return (
    <div className={className.concat(modalState ? ' show' : '')} onClick={() => toggleModalState()}>
      <Backdrop>
      {children}
      </Backdrop>
    </div>
  )
}

export default ModalContainer
