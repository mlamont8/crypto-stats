import React from "react";
import VertForm from '../../containers/vertForm/vertForm'

const ImageBlock = (props) => (

    <div className="ibContainer uk-flex uk-flex-column">
        <div className="ibContainer-fr uk-flex uk-flex-around uk-flex-middle">

            <img className="imageIcon" data-src={props.img} width="40px" height="40px" uk-img="true" />
            <span className="nameBlk uk-flex uk-flex-center">
                <h1>{props.coinFrom}</h1>
            </span>

        </div>
        <div className="ibContainer-sr">
            <span><h2>{props.coinName}</h2></span>
        </div>

        <div className="ibContainer-tr">
            <VertForm />
        </div>
    </div>
)

export default ImageBlock;