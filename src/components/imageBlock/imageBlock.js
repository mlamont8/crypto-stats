import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

// Child of summary.js
//  - main
//    -summary
//      -imageBlock

const ImageBlock = () => {
  const coinFrom = useSelector(state => state.searchTerm.currentFrom);
  const img = useSelector(state => state.coinUrl.convertFrom);
  const coinTo = useSelector(state => state.searchTerm.currentTo);
  const market = useSelector(state => state.searchTerm.currentMarket);
  const coinName = useSelector(state => state.coinName.convertFrom);

  return (
    <div className="infoBlock imageBlock">
      <img
        className="imageIcon"
        alt={coinFrom}
        data-src={img}
        width="50px"
        height="50px"
        uk-img="true"
      />
      <span className="nameBlk">
        {coinFrom} <FontAwesomeIcon icon={faArrowRight} /> {coinTo}
      </span>
      <div className="ibMarket">{market}</div>

      <div className="ibContainer-sr">
        <span>
          <h2>{coinName}</h2>
        </span>
      </div>

      {/* <div className="ibContainer-tr">
        <button type="button" onClick={newSearch.bind(this, true)}>
          SEARCH AGAIN
        </button>
      </div> */}
    </div>
  );
};

// const mapDispatchToProps = dispatch => ({
//   newSearch: () => {
//     dispatch({ type: 'SEARCH_MODAL_REQUEST' });
//   }
// })

// export default connect(null, mapDispatchToProps)(ImageBlock);
export default ImageBlock;
