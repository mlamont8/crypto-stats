import React from "react";
import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";


const liveGrid = props => {
  const { liveResults, usd, to } = props;
  console.log('raw Live Results', liveResults)
  // get the counter of the last object of the array, 
  // this is the counter of the last search done by the user.
  const currentloc = liveResults.length - 1;
  console.log('current location', currentloc);
  const currentSearch = liveResults[currentloc].counter;
  console.log('current search', currentSearch);
  // create new array that only has the currentsearch as the counter
  // get last 10 items in array
  const fixedArray = liveResults <= 10 ?
    liveResults : liveResults.slice(-10);
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

            {fixedArray.slice(1).map((result) => {
              const arrow = result.flag === "2" ? "arrow-circle-down" : "arrow-circle-up";
              return (<tr key={result.time}>
                <td><FontAwesomeIcon icon={["fas", arrow]} /></td>
                <td>{result.time}</td>
                <td>{result.price}<span className="toPrice">{to}</span></td>
                <td>${(usd * result.price).toFixed(2)}


                </td>
              </tr>)
            }
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
      flag: PropTypes.string,
      price: PropTypes.string,
      time: PropTypes.string,
    }).isRequired
  ).isRequired,
  usd: PropTypes.number.isRequired,
  to: PropTypes.string,
};

export default liveGrid;
