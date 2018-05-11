import React from "react";
import PropTypes from "prop-types";

const Live = props => {
  const { flag, dollar, exchange, price } = props;
  const conversion = (price * dollar).toFixed(2);
  return (
    <div className="col-md-12">
      <div className="row text-center">
        <div
          className={flag === "2" ? "col-md-4 liveItem" : "col-md-4 liveItem"}
        >
          <span className={flag === "2" ? "down" : "up"}>{price}</span>{" "}
          <span className="conversion">${conversion}</span>
        </div>
        <div className="liveItem col-md-4">{flag}</div>
        <div className="liveItem col-md-4">{exchange}</div>
      </div>
    </div>
  );
};

Live.propTypes = {
  price: PropTypes.string,
  flag: PropTypes.string,
  exchange: PropTypes.string,
  dollar: PropTypes.number.isRequired
};

Live.defaultProps = {
  price: "",
  flag: "",
  exchange: ""
};

export default Live;
