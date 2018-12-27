import React from "react";
import PropTypes from "prop-types";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import { notificationAlert, filterArray } from "../../helpers/index";

// Child of Main.js

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

  // Notification events when price updates
  // ** Add Icon and Name**
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
    const setMessage = `
    <div class="notiContainer">
      <div class="notiLeft">
        <div>
          <img
            class="imageIcon"
            alt=${this.props.coinFrom}
            src=${this.props.image}
            width="50px"
            height="50px"
            uk-img="true"
          />
      </div>
    <div>
    ${this.props.from}
    </div>
    </div>
    <div class="notiRight"><div><span uk-icon='icon: ${setArrow}'></span></div>
     <div><div>${price} ${to}</div><div>($${dollars})</div></div></div>
     </div>`;
    return notificationAlert(setMessage, setStatus);
  }

  render() {
    const { liveResults, usd, to } = this.props;
    return (
      <div className="live-table mainBlock infoBlock">
        <div className="blockTitle liveTitle">
          <h1>LIVE UPDATES</h1>
        </div>

        <div className="gridTitle">
          <div></div>
          <div>TIME</div>
          <div>PRICE</div>
          <div>USD</div>
        </div>
        <div className="gridRows">
          {filterArray(liveResults).map(result => {
            const arrow = result.flag === "2" ? "arrow-down" : "arrow-up";
            return (
              <div className={(result.time === liveResults[liveResults.length - 1].time) ? "currentResult gridColumns" : "gridColumns"}
                key={result.time}>
                <div>
                  {" "}
                  <span uk-icon={`icon: ${arrow}`} />
                </div>
                <div>{result.time}</div>
                <div>
                  {result.price}
                  <span className="toPrice">{to}</span>
                </div>
                <div>${(usd * result.price).toFixed(2)}</div>

              </div>
            );
          })}
        </div>
      </div>
    )
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
