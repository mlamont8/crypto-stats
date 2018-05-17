import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Image } from "react-bootstrap";
import LineChart from "../../components/lineChart/LineChart";
import LiveResults from "../../components/liveResults/liveResults";

// Top Summary information

const Summary = props => (
  <div className="row summary">
    <div className="col-sm-2 summary-left">
      <div className="summary-block">
        <Image src={props.image} responsive />
        <h1>{props.coinFrom}</h1>
        <h2>{props.coinName}</h2>
      </div>
    </div>
    <div className="col-sm-8 summary-center summary-block">
      <LineChart data={props.byHour} />
    </div>
    <div className="col-sm-2 summary-right summary-block">
      <div className="info-block">
        <LiveResults
          price={props.price}
          exchange={props.exchange}
          flag={props.flag}
          dollar={props.inDollars}
          from={props.coinFrom}
          to={props.coinTo}
        />
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  exchange: state.searchTerm.market,
  coinFrom: state.searchTerm.convertFrom,
  coinTo: state.searchTerm.convertTo,
  byHour: state.coinByHour.coinByHour,
  image: state.coinUrl.convertFrom,
  coinName: state.coinName.convertFrom,
  price: state.liveResults.price,
  flag: state.liveResults.flag,
  inDollars: state.byDollar.coinConversion
});

Summary.defaultProps = {
  coinFrom: "",
  coinTo: "",
  exchange: "",
  byHour: [],
  image: "",
  coinName: "",
  price: "",
  flag: "",
  inDollars: 0
};

Summary.propTypes = {
  coinFrom: PropTypes.string,
  coinTo: PropTypes.string,
  exchange: PropTypes.string,
  byHour: PropTypes.arrayOf(PropTypes.object),
  image: PropTypes.string,
  coinName: PropTypes.string,
  price: PropTypes.string,
  flag: PropTypes.string,
  inDollars: PropTypes.number
};

export default connect(mapStateToProps)(Summary);
