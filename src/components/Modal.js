import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
    return ReactDOM.createPortal(
        <div className="modals">
            <div className="modal">
                modal
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Modal;