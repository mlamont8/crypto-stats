import React from "react";
import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

class liveGrid extends React.Component {
  // Return only array values for the current user search attempt
  filterArray(liveResults) {
    console.log(liveResults, "liveResults");
    // Get results from only the current search
    const currentSearchCount = liveResults[liveResults.length - 1].counter;
    // Only show the last 10 results of the array if array is greater than 10
    const lastTen =
      currentSearchCount <= 10 ? liveResults : liveResults.slice(-10);
    return lastTen.filter(value => value.counter === currentSearchCount);
  }

  render() {
    const { liveResults, usd, to } = this.props;

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
              {this.filterArray(liveResults).map(result => {
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
  }
}

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
