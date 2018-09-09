import React from "react";
// import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const LiveResults = props => {
  const { flag, dollar, exchange, price, to } = props;
  const conversion = (price * dollar).toFixed(2);
  const arrow = flag === "2" ? "arrow-down" : "arrow-up";
  return (
    <div className="current text-center">
      <div className="blockTitle">
        <h1>CURRENT</h1>
      </div>
      {exchange}
      <hr />
      <div className="row">
        <div className="liveItem">
          <span className="price">{price}</span>
          <span className="toPrice">{to}</span>
        </div>
      </div>
      <div className="row">
        <span className="conversion" id={arrow}>
          (${conversion})
        </span>
      </div>
    </div>
  );
};

LiveResults.propTypes = {
  price: PropTypes.string,
  flag: PropTypes.string,
  exchange: PropTypes.string,
  dollar: PropTypes.number,
  to: PropTypes.string
};

LiveResults.defaultProps = {
  price: "",
  flag: "",
  exchange: "",
  dollar: 0,
  to: ""
};

export default LiveResults;
