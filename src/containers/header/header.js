import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { notificationOption } from "../../actions";
import { notificationAlert } from "../../helpers/index";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.updateNotificationStatus = this.updateNotificationStatus.bind(this);
  }

  // Notify user and make notification status chnage
  updateNotificationStatus() {
    const { toggle } = this.props;
    const msg = `NOTIFICATIONS: ${toggle}`;
    this.props.changeNotification();
    notificationAlert(msg, "alert");
  }

  render() {
    return (
      <nav className="uk-navbar-container" uk-navbar="true">
        <div className="uk-navbar-left">
          <span className="uk-navbar-item uk-logo">Crypto Stats</span>
        </div>

        <div className="uk-navbar-right">
          <div className="uk-margin uk-grid-small uk-child-width-auto">
            <label>Notifications</label>
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
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    toggle: state.notification.option
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
  changeNotification: PropTypes.func.isRequired,
  toggle: PropTypes.string.isRequired
};

Header.defaultProps = {
  firstLoad: true
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
