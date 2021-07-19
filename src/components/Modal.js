import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className="modals">
            <div onClick={(e) => e.stopPropagation()} 
            className="modal">
                {props.content}
            </div>
            {props.actions}
        </div>,
        document.querySelector('#modal')
    )
}

export default Modal;