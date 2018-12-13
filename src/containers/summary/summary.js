import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CoinLineChart from "../../components/lineChart/LineChart";
import ImageBlock from "../../components/imageBlock/imageBlock";

// Top Summary information
// Child of Main.js
// Props from Redux State

const Summary = props => {
  return (
    <div className="summary-container">
      <div className="summary-left summary-block">
        <ImageBlock
          img={props.image}
          coinFrom={props.coinFrom}
          coinName={props.coinName}
          coinTo={props.coinTo}
        />
      </div>
      <div className="summary-center summary-block">
        <CoinLineChart title="History" data={props.historicalDay} />
      </div>

    </div>
  );
};

const mapStateToProps = state => ({
  exchange: state.searchTerm.market,
  coinFrom: state.searchTerm.convertFrom,
  coinTo: state.searchTerm.convertTo,
  historicalDay: state.historical.fullHistory,
  image: state.coinUrl.convertFrom,
  coinName: state.coinName.convertFrom,
  inDollars: state.byDollar.coinConversion,
  liveResults: state.liveResults,
  newResult: state.liveResults[state.liveResults.length - 1],
  modal: state.modal.status,
});

Summary.defaultProps = {
  coinFrom: "",
  coinTo: "",
  exchange: "",
  historicalDay: [],
  image: "",
  coinName: "",
  inDollars: 0
};

Summary.propTypes = {
  coinFrom: PropTypes.string,
  coinTo: PropTypes.string,
  exchange: PropTypes.string,
  historicalDay: PropTypes.arrayOf(PropTypes.object),
  image: PropTypes.string,
  coinName: PropTypes.string,
  inDollars: PropTypes.number,
  liveResults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      flag: PropTypes.string,
      price: PropTypes.string,
      time: PropTypes.string
    }).isRequired
  ).isRequired
};

export default connect(mapStateToProps)(Summary);
