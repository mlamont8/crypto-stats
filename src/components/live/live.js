import React from "react";
import PropTypes from "prop-types";

const Live = props => (
  <div className="col-md-12">
    <div className="row text-center">
      <div
        className={
          props.flag === "2" ? "col-md-4 liveItem down" : "col-md-4 liveItem up"
        }
      >
        {props.price}
      </div>
      <div className="liveItem col-md-4">{props.flag}</div>
      <div className="liveItem col-md-4">{props.exchange}</div>
    </div>
  </div>
);

Live.propTypes = {
  price: PropTypes.string,
  flag: PropTypes.string,
  exchange: PropTypes.string
};

Live.defaultProps = {
  price: "",
  flag: "",
  exchange: ""
};

export default Live;
