import React from "react";
import PropTypes from "prop-types";

const News = props => (
  <div className="info-block">
    <h1>RECENT NEWS</h1>
    <div className="row">News Data</div>
  </div>
);

News.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object)
};

export default News;
