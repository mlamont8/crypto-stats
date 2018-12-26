import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';


// Child of summary.js
//  - main
//    -summary
//      -imageBlock

export const ImageBlock = props => (
  <div className="infoBlock imageBlock">
    <img
      className="imageIcon"
      alt={props.coinFrom}
      data-src={props.img}
      width="50px"
      height="50px"
      uk-img="true"
    />
    <span className="nameBlk">
      {props.coinFrom}{' '}
      <FontAwesomeIcon icon={faArrowRight} />{' '}
      {props.coinTo}
    </span>
    <div className="ibMarket">
      {props.market}
    </div>

    <div className="ibContainer-sr">
      <span>
        <h2>{props.coinName}</h2>
      </span>
    </div>

    <div className="ibContainer-tr">

      <button type="button" onClick={props.newSearch.bind(this, true)}>
        SEARCH AGAIN
      </button>
    </div>
  </div>
)

const mapDispatchToProps = dispatch => ({
  newSearch: () => {
    dispatch({ type: 'SEARCH_MODAL_REQUEST' });
  }
})

export default connect(null, mapDispatchToProps)(ImageBlock);
