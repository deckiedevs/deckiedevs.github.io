import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../../assets/css/modal.css';

function Modal({ onClose, displayedProject }) {
    const {
        link,
        text,
        name,
        technologies,
        description
    } = displayedProject;

    return (
        <div>
            <div className="modal-bg" onClick={onClose}></div>
            <div className="modal-card w100 px-5 py-5">
                <h3>{name}</h3>
                <p>
                    {description}
                </p>
                <FontAwesomeIcon icon={faTimes} size="lg" onClick={onClose} className="modal-btn" />
            </div>
        </div>
    );
};

export default Modal;