import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { notificationOption } from "../../actions";
import { notificationAlert } from "../../helpers/index";

// Child of main.js
// Prop firstload from main.js

// Contains Notifications

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.updateNotificationStatus = this.updateNotificationStatus.bind(this);
  }

  // Toggles notification status; Sends update to user
  updateNotificationStatus() {
    const { toggle } = this.props;
    const status = toggle === "on" ? "OFF" : "ON";
    const msg = `Notifications are now ${status}`;
    this.props.changeNotification();
    notificationAlert(msg, "alert");
  }

  render() {
    const liveResult = this.props.liveResults.slice(-1);
    // Get the updated current price
    const price = liveResult[0].price;

    //Convert the price to US Dollars
    const usDollars = (price * this.props.inDollars).toFixed(2);
    return (
      <nav className="navbar-container">
        <div className="navbar-left">
          <span className="uk-navbar-item uk-logo">Crypto Stats</span>
        </div>
        <div className={`${isNaN(usDollars) ? 'navbar-hide' : 'navbar-center'}`}>
          <h1>{this.props.coinName} - ${usDollars} ({price})</h1>
        </div>
        <div className={`${isNaN(usDollars) ? 'navbar-hide' : 'navbar-right'}`}>
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
                  onChange={this.updateNotificationStatus}
                  checked={this.props.toggle === "on"}
                />{" "}
                On
        </label>
              <label>
                <input
                  className="uk-radio"
                  value="off"
                  type="radio"
                  onChange={this.updateNotificationStatus}
                  checked={this.props.toggle === "off"}
                />{" "}
                Off
        </label>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    toggle: state.notification.option,
    firstLoad: state.isLoading.firstLoad,
    coinName: state.coinName.convertFrom,
    inDollars: state.byDollar.coinConversion,
    liveResults: state.liveResults,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeNotification: () => {
      dispatch(notificationOption());
    }
  };
};

Header.propTypes = {
  firstLoad: PropTypes.bool,
  changeNotification: PropTypes.func,
  toggle: PropTypes.string,
  inDollars: PropTypes.number,

};

Header.defaultProps = {
  firstLoad: true,
  inDollars: 0,
  liveResults: {
    price: 0
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

