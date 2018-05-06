import React from "react";
import PropTypes from "prop-types";

class Live extends React.Component {
  render() {
    return <div />;
  }
}

Live.propTypes = {
  market: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

export default Live;
