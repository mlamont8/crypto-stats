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

      <button type="button" onClick={props.newSearch.bind(this, true)}>
        New Search
      </button>
    </div>
  </div>
)

const mapDispatchToProps = dispatch => ({
  newSearch: (toggle) => {
    dispatch({ type: 'SEARCH_FROM_MAIN'});
  }
})

export default connect(null, mapDispatchToProps)(ImageBlock);
