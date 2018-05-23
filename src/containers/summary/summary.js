import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Image } from "react-bootstrap";
import LineChart from "../../components/lineChart/LineChart";
import LiveResults from "../../components/liveResults/liveResults";

// Top Summary information

const Summary = props => {
  const currentPrice = (props.liveResults[props.liveResults.length - 1]);
  const { price, flag } = currentPrice;
  return (
    <div className="row summary" >
      <div className="col-sm-2 summary-left">
        <div className="summary-block">
          <Image src={props.image} responsive />
          <h1>{props.coinFrom}</h1>
          <h2>{props.coinName}</h2>
        </div>
      </div>
      <div className="col-sm-8 summary-center">
        <div className="summary-block">
          <LineChart data={props.byHour} />
        </div>
      </div>
      <div className="col-sm-2 summary-right summary-block">
        <div className="info-block">
          <LiveResults
            price={price}
            exchange={props.exchange}
            flag={flag}
            dollar={props.inDollars}
            to={props.coinTo}
          />
        </div>
      </div>
    </div >
  )
}


const mapStateToProps = state => ({
  exchange: state.searchTerm.market,
  coinFrom: state.searchTerm.convertFrom,
  coinTo: state.searchTerm.convertTo,
  byHour: state.coinByHour.coinByHour,
  image: state.coinUrl.convertFrom,
  coinName: state.coinName.convertFrom,
  inDollars: state.byDollar.coinConversion,
  liveResults: state.liveResults,
  newResult: state.liveResults[state.liveResults.length - 1],
});

Summary.defaultProps = {
  coinFrom: "",
  coinTo: "",
  exchange: "",
  byHour: [],
  image: "",
  coinName: "",
  inDollars: 0
};

Summary.propTypes = {
  coinFrom: PropTypes.string,
  coinTo: PropTypes.string,
  exchange: PropTypes.string,
  byHour: PropTypes.arrayOf(PropTypes.object),
  image: PropTypes.string,
  coinName: PropTypes.string,
  inDollars: PropTypes.number,
  liveResults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      flag: PropTypes.string,
      price: PropTypes.string,
      time: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default connect(mapStateToProps)(Summary);
