import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../../assets/css/modal.css';

function Modal({ onClose, displayedProject }) {
    const {
        name,
        technologies,
        deployed,
        link,
        github,
        description
    } = displayedProject;

    return (
        <div>
            <div className="modal-bg" onClick={onClose}></div>
            <div className="modal-card w100 px-5 py-5">
                <FontAwesomeIcon icon={faTimes} size="lg" onClick={onClose} className="modal-btn" />
                <div className="modal-title">
                    <h3>{name}</h3>
                </div>
                <div className="modal-body">
                    <p>
                        <span className="bold">Built With: </span> {technologies}
                    </p>
                    { deployed && 
                        <p>
                            <span className="bold">Deployed Site: </span> 
                            <a href={link} target="_blank">{name}</a>
                        </p>
                    }
                    { github && 
                    <p>
                        <span className="bold">GitHub: </span> 
                        <a href={github} target="_blank">{name} Repository</a>
                    </p>
                    }
                    <p>
                        <span className="bold">Description: </span> {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Modal;