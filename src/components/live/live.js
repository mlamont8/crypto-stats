import React from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';


class Live extends React.Component {

    constructor(props) {
        super(props);
        this.liveFetch = this.liveFetch.bind(this);

    }

    componentDidMount() {
        const { market, from, to } = this.props;
        this.liveFetch("Binance", "ETH", "BTC");
    };

    componentWillReceiveProps(nextProps) {
        const { market, from, to } = this.props;
        // Check if type actually changed
        if (JSON.stringify(this.props.to) !== JSON.stringify(nextProps.to)) {
            this.liveFetch(market, from, to);
        }
    }



    liveFetch(market, from, to) {
        var currentPrice = {};
        var socket = io.connect('https://streamer.cryptocompare.com/');
        //Format: {SubscriptionId}~{ExchangeName}~{FromSymbol}~{ToSymbol}
        //Use SubscriptionId 0 for TRADE, 2 for CURRENT, 5 for CURRENTAGG eg use key '5~CCCAGG~BTC~USD' to get aggregated data from the CCCAGG exchange 
        //Full Volume Format: 11~{FromSymbol} eg use '11~BTC' to get the full volume of BTC against all coin pairs
        //For aggregate quote updates use CCCAGG ags market
        var subscription = [`2~${market}~${from}~${to}`];
        socket.emit('SubAdd', { subs: subscription });
        socket.on("m", function (message) {
            const valuesArray = message.split("~");
            console.log(valuesArray)
            var messageType = message.substring(0, message.indexOf("~"));
            //     if (messageType == CCC.STATIC.TYPE.CURRENTAGG) {
            //         dataUnpack(message);
            //     }
            //     else if (messageType == CCC.STATIC.TYPE.FULLVOLUME) {
            //         decorateWithFullVolume(message);
            //     }
        });
        // return const 
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