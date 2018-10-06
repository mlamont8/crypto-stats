import React from "react";
import VertForm from "../../containers/vertForm/vertForm";

const ImageBlock = props => (
  <div className="infoBlock imageBlock">
      <img
        className="imageIcon"
        alt={props.coinFrom}
        data-src={props.img}
        width="40px"
        height="40px"
        uk-img="true"
      />
      <span className="nameBlk">
        <h1>{props.coinFrom}</h1>
      </span>
   
      <div className="ibContainer-sr">
        <span>
          <h2>{props.coinName}</h2>
        </span>
      </div>

      <div className="ibContainer-tr">
        <VertForm />
      </div>
  </div>
);

export default ImageBlock;
