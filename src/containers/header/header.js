import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { notificationOption } from "../../actions";
import { notificationAlert } from "../../helpers/index";

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
    const firstRender = this.props.firstLoad ? null : (
      <div className="uk-navbar-right">
        <div className="uk-flex uk-flex-column">
          <div>
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
    );
    return (
      <nav className="uk-navbar-container" uk-navbar="true">
        <div className="uk-navbar-left">
          <span className="uk-navbar-item uk-logo">Crypto Stats</span>
        </div>
        {firstRender}
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    toggle: state.notification.option,
    firstLoad: state.isLoading.firstLoad
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
  toggle: PropTypes.string
};

Header.defaultProps = {
  firstLoad: true
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

