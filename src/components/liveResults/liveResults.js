import React from "react";
import PropTypes from "prop-types";

const LiveResults = props => {
  const { flag, dollar, exchange, price, from, to } = props;
  const conversion = (price * dollar).toFixed(2);
  return (
    <div className="current text-center">
      <h1>CURRENT</h1>
      <h2>
        {from} to {to}
      </h2>
      <div className="row">
        <div
          className={flag === "2" ? "col-md-4 liveItem" : "col-md-4 liveItem"}
        >
          <span className={flag === "2" ? "down" : "up"}>{price}</span>{" "}
        </div>
      </div>
      <div className="row">
        <span className="conversion">${conversion}</span>
      </div>
      <div className="row">
        <span className="liveItem col-md-4">{flag}</span>
      </div>
      <div className="row">
        <div className="liveItem col-md-4">{exchange}</div>
      </div>
    </div>
  );
};

LiveResults.propTypes = {
  price: PropTypes.string,
  flag: PropTypes.string,
  exchange: PropTypes.string,
  dollar: PropTypes.number,
  from: PropTypes.string,
  to: PropTypes.string
};

LiveResults.defaultProps = {
  price: "",
  flag: "",
  exchange: "",
  dollar: 0,
  from: "",
  to: ""
};

export default LiveResults;
