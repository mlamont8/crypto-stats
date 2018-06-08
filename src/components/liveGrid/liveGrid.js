import React from "react";
import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { filterArray } from "../../helpers/index";

const liveGrid = props => {
  const { liveResults, usd, to } = props;
  return (
    <div className="info-block live-table">
      <h1>LIVE UPDATES</h1>
      <div className="row">
        <table>
          <thead>
            <tr>
              <th />
              <th>TIME</th>
              <th>PRICE</th>
              <th>USD</th>
            </tr>
          </thead>
          <tbody>
            {filterArray(liveResults).map(result => {
              const arrow =
                result.flag === "2" ? "arrow-circle-down" : "arrow-circle-up";
              return (
                <tr key={result.time}>
                  <td>
                    <FontAwesomeIcon icon={["fas", arrow]} />
                  </td>
                  <td>{result.time}</td>
                  <td>
                    {result.price}
                    <span className="toPrice">{to}</span>
                  </td>
                  <td>${(usd * result.price).toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

liveGrid.propTypes = {
  liveResults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      flag: PropTypes.string,
      price: PropTypes.string,
      time: PropTypes.string
    }).isRequired
  ).isRequired,
  usd: PropTypes.number.isRequired,
  to: PropTypes.string.isRequired
};

export default liveGrid;
