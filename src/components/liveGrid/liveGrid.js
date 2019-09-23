import React, { useEffect } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import { notificationAlert, filterArray } from "../../helpers/index";
import { useSelector } from "react-redux";

// Child of Main.js

// loads the Icon plugin
UIkit.use(Icons);

const LiveGrid = () => {
  const liveResults = useSelector(state => state.liveResults);
  const usd = useSelector(state => state.byDollar.coinConversion);
  const to = useSelector(state => state.searchTerm.currentTo);
  const notifyStatus = useSelector(state => state.notification.option);
  const from = useSelector(state => state.searchTerm.currentFrom);
  const image = useSelector(state => state.coinUrl.convertFrom);

  useEffect(() => {
    if (notifyStatus === "on") {
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
            alt=${from}
            src=${image}
            width="50px"
            height="50px"
            uk-img="true"
          />
      </div>
    <div>
    ${from}
    </div>
    </div>
    <div class="notiRight"><div><span uk-icon='icon: ${setArrow}'></span></div>
     <div><div>${price} ${to}</div><div>($${dollars})</div></div></div>
     </div>`;
      notificationAlert(setMessage, setStatus);
    }
  }, [liveResults, notifyStatus, from, image, to, usd]);

  const items = filterArray(liveResults).map(result => {
    const arrow = result.flag === "2" ? "arrow-down" : "arrow-up";
    return (
      <div
        className={
          result.time === liveResults[liveResults.length - 1].time
            ? "currentResult gridColumns"
            : "gridColumns"
        }
        key={result.time}
      >
        <div>
          {" "}
          <span uk-icon={`icon: ${arrow}`} />
        </div>
        <div>{result.time}</div>
        <div>
          {result.price}
          {` `}
          {to}
        </div>
        <div>${(usd * result.price).toFixed(2)}</div>
      </div>
    );
  });

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
        <CSSTransitionGroup
          transitionName="grid"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {items}
        </CSSTransitionGroup>
      </div>
    </div>
  );
};

export default LiveGrid;
