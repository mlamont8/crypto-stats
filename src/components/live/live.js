import React from 'react';
import PropTypes from 'prop-types';


class Live extends React.Component {

    componentDidMount() {
        const { market, from, to } = this.props;
        liveFetch(market, from, to);
    };

    const liveFetch = (market, from, to) => {

    };

    render() {
        return (
            <div></div>
        )
    }
};

Live.propTypes = {
    market: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
}

export default Live;