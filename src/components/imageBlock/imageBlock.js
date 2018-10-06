import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
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
        {props.coinFrom}{' '}
        <FontAwesomeIcon icon={faArrowRight} />{' '}
        {props.coinTo}
        
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
