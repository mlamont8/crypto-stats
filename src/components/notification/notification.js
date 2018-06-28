import React from 'react';
import PropTypes from 'prop-types';
import UIkit from 'uikit';

class Notification extends React.Component {

    handleClick() {
        return(
        UIkit.notification({message: 'Notification message'})
        )
    }

    render() {
    return(<button className="demo uk-button uk-button-default" type="button" onClick={this.handleClick} >Click me</button>)
} }

export default Notification;