import React from 'react';


const SelectorModal = (props) => {


    return (
        <div className="modalContainer">
            <div className="modalContent">
                Modal Content
                <button type="button" onClick={props.handleClose}>Close</button>
            </div>
        </div>
    )

}

export default SelectorModal;