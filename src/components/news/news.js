import React from 'react';
import PropTypes from 'prop-types';

const News = props => (
  <div className="infoBlock">
    <div className="blockTitle">
      <h1>RECENT NEWS</h1>
    </div>
    <div className="row">
      <table>
        <tbody>
          {props.data.map(result => (
            <tr key={result.id}>
              <td>{result.published_on}</td>
              <td>
                <a href={result.url}>{result.title}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

News.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object),
};

export default News;
