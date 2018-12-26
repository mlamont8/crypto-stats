import React from 'react';
import PropTypes from 'prop-types';

const News = props => (
  <div className="infoBlock">
    <div className="blockTitle">
      <h1>RECENT NEWS</h1>
    </div>
    {props.data.map(result => (
      <div key={result.id} className="newsRow">
        <div>
          <a href={result.url}>{result.title}</a>
        </div>
      </div>
    ))}

  </div>
);

News.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object),
};

export default News;
