import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Image } from "react-bootstrap";
import LineChart from "../../components/lineChart/LineChart";
import Live from "../../components/live/live";

// Top Summary information

const Summary = props => (
  <div className="row summary">
    <div className="col-sm-2 summary-left">
      <div className="info-block">
        <Image src={props.image} responsive />
        <h1>{props.coinFrom}</h1>
        <p>{props.coinName}</p>
      </div>
    </div>
    <div className="col-sm-8 summary-center">
      <div className="row">
        <LineChart data={props.byHour} />
      </div>
      <div className="row">
        <Live price={props.price} exchange={props.exchange} flag={props.flag} />
      </div>
    </div>
    <div className="col-sm-2 summary-right" />
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
  flag: state.liveResults.flag
});

Summary.defaultProps = {
  coinFrom: "",
  coinTo: "",
  exchange: "",
  byHour: [],
  image: "",
  coinName: "",
  price: "",
  flag: ""
};

Summary.propTypes = {
  coinFrom: PropTypes.string,
  coinTo: PropTypes.string,
  exchange: PropTypes.string,
  byHour: PropTypes.arrayOf(PropTypes.object),
  image: PropTypes.string,
  coinName: PropTypes.string,
  price: PropTypes.string,
  flag: PropTypes.string
};

export default connect(mapStateToProps)(Summary);
