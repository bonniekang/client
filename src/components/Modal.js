import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history'

const Modal = props => {
    return ReactDOM.createPortal(
        <div onClick={() => history.push('/')} className="modals">
            <div onClick={(e) => e.stopPropagation()} 
            className="modal">
                are you sure you want to delete this?
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Modal;