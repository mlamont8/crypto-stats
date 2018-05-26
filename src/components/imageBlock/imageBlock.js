import React from "react";
import { Image } from 'react-bootstrap'

const ImageBlock = (props) => (
    <div>
        <div className="row">
            <div className="col-xs-6">
                <Image src={props.img} circle responsive />
            </div>
        </div>
        <div className="row">
            <div className="col-xs-12">
                <h1>{props.coinFrom}</h1>
                <h2>{props.coinName}</h2>
            </div>
        </div>
    </div >
)

export default ImageBlock;