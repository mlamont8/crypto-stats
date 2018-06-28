import React from "react";
import PropTypes from "prop-types";
// import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { filterArray } from "../../helpers/index";

class LiveGrid extends React.Component {

  componentDidUpdate(prevProps) {
    // Used to send notification when live results arrive
    if (this.props.liveResults !== prevProps.liveResults) {
      this.props.notification();
    }
    return null
  }

render() {
  const { liveResults, usd, to } = this.props;
  return (
    <div className="info-block live-table">
    <button className="demo uk-button uk-button-default" type="button" onClick={this.props.handleClick} >Click me</button>
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
              // const arrow =
              //   result.flag === "2" ? "arrow-circle-down" : "arrow-circle-up";
              return (
                <tr key={result.time}>
                  <td>
                    {/* <FontAwesomeIcon icon={["fas", arrow]} /> */}
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
}

LiveGrid.propTypes = {
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

export default LiveGrid;
