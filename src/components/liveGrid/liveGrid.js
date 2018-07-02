import React from "react";
import PropTypes from "prop-types";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import { notificationAlert, filterArray } from "../../helpers/index";

// loads the Icon plugin
UIkit.use(Icons);

class LiveGrid extends React.Component {
  componentDidUpdate(prevProps) {
    // Used to send notification when live results arrive
    const { notifyStatus, liveResults } = this.props;
    if (liveResults !== prevProps.liveResults && notifyStatus === "on") {
      this.sendNotification();
    }
  }

  sendNotification() {
    const { liveResults, to, usd } = this.props;
    // get the current result
    const currentResult = liveResults[liveResults.length - 1];
    // set color style of notification
    const setStatus = currentResult.flag === "2" ? "danger" : "success";
    // Up or down arrow depending on update
    const setArrow = setStatus === "danger" ? "arrow-down" : "arrow-up";
    const price = currentResult.price;
    const dollars = (usd * price).toFixed(2);
    const setMessage = `<div><span uk-icon='icon: ${setArrow}'></span></div>
     <div><div>${price} ${to}</div><div>($${dollars})</div></div>`;
    return notificationAlert(setMessage, setStatus);
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
              {filterArray(liveResults).map(result => {
                const arrow = result.flag === "2" ? "arrow-down" : "arrow-up";
                return (
                  <tr key={result.time}>
                    <td>
                      {" "}
                      <span uk-icon={`icon: ${arrow}`} />
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
  to: PropTypes.string.isRequired,
  notifyStatus: PropTypes.string.isRequired
};

export default LiveGrid;
