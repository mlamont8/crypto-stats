import React from "react";
import PropTypes from "prop-types";

const liveGrid = props => {
  const { liveResults, usd } = props;

  return (
    <div className="info-block live-table">
      <h3>LIVE UPDATES</h3>
      <div className="row">
        <table>
          <thead>
            <tr>
              <th>TIME</th>
              <th>CHANGE</th>
              <th>PRICE</th>
              <th>USD</th>
            </tr>
          </thead>
          <tbody>

            {liveResults.slice(1).map((result) =>
              (<tr key={result.id}>
                <td>{result.time}</td>
                <td>{result.flag}</td>
                <td>{result.price}</td>
                <td>${(usd * result.price).toFixed(2)}</td>
              </tr>)
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}


liveGrid.propTypes = {
  liveResults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      flag: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  usd: PropTypes.string
};

export default liveGrid;
