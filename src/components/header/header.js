import React from "react";
import { notificationAlert } from "../../helpers/index";
import { useDispatch, useSelector } from "react-redux";
import logo from "./../../images/logo.png";
// Child of main.js
// Prop firstload from main.js

const Header = props => {
  const dispatch = useDispatch();
  const toggle = useSelector(state => state.notification.option);
  const coinName = useSelector(state => state.coinName.convertFrom);
  const inDollars = useSelector(state => state.byDollar.coinConversion);
  const liveResults = useSelector(state => state.liveResults);

  // Toggles notification status; Sends update to user
  const updateNotificationStatus = () => {
    const status = toggle === "on" ? "OFF" : "ON";
    const msg = `Notifications are now ${status}`;
    dispatch({ type: "NOTIFICATION_TOGGLE", option: status });
    notificationAlert(msg, "alert");
  };

  const liveResult = liveResults.slice(-1);
  // Get the updated current price
  const price = liveResult[0].price;

  //Convert the price to US Dollars
  const usDollars = (price * inDollars).toFixed(2);

  const { dash } = props;
  console.log(logo);
  return (
    <nav className={dash ? "navbar-container dash" : "navbar-container"}>
      <div>
        <span className="uk-navbar-item uk-logo">
          <img className="header-logo" src={logo} alt="" />
        </span>
      </div>
      <div className={`${isNaN(usDollars) ? "navbar-hide" : "navbar-center"}`}>
        <h1>
          {coinName} - ${usDollars} ({price})
        </h1>
      </div>
      <div className={`${isNaN(usDollars) ? "navbar-hide" : "navbar-right"}`}>
        <div className="uk-flex uk-flex-column notification-block">
          <div className="notification-title">
            <label>Notifications</label>
          </div>
          <div className="notificationLabel">
            <label>
              <input
                className="uk-radio"
                value="on"
                type="radio"
                onChange={updateNotificationStatus}
                checked={toggle === "on"}
              />{" "}
              On
            </label>
            <label>
              <input
                className="uk-radio"
                value="off"
                type="radio"
                onChange={updateNotificationStatus}
                checked={toggle === "off"}
              />{" "}
              Off
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
