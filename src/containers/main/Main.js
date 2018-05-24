import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Header from "../../containers/header/header";
import Summary from "../summary/summary";
import HistoricalChart from "../../components/historicalChart/historicalChart";
import DailyAreaChart from "../../components/dailyAreaChart/DailyAreaChart";
import ExchangeVolume from "../../components/exchangeVolume/exchangeVolume";
import LiveGrid from "../../components/liveGrid/liveGrid";

class Main extends React.Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { isLoading, fifteenDay, historicalDay, exchangeVolume, liveResults, inDollars, to } = this.props;
    return isLoading ? (
      <div>Loading</div>
    ) : (
        <div>
          <Header />
          <div className="container-fluid dash-container">
            <Summary />

            <div className="row first-row">
              <div className="col-md-4">
                <LiveGrid
                  liveResults={liveResults}
                  usd={inDollars}
                  to={to}
                />
              </div>
              <div className="col-md-8">
                <DailyAreaChart data={fifteenDay} />
              </div>
            </div>

            <div className="row second-row">
              <div className="col-md-6">
                <HistoricalChart data={historicalDay} />
              </div>
              <div className="col-md-6">
                <ExchangeVolume data={exchangeVolume} />
              </div>
            </div>
          </div>
        </div>
      );
  }
}

const mapDispatchToProps = dispatch => ({
  fetch: () => {
    dispatch({ type: "EXCHANGE_FETCH_REQUESTED" });
  }
});

const mapStateToProps = state => ({
  fifteenDay: state.coinByDay.fifteenDay,
  historicalDay: state.historical.fullHistory,
  isLoading: state.isLoading.fetching,
  exchangeVolume: state.topExchanges.data,
  market: state.searchTerm.market,
  from: state.searchTerm.convertFrom,
  to: state.searchTerm.convertTo,
  liveResults: state.liveResults,
  inDollars: state.byDollar.coinConversion,

});

Main.propTypes = {
  fifteenDay: PropTypes.arrayOf(PropTypes.object),
  historicalDay: PropTypes.arrayOf(PropTypes.object),
  exchangeVolume: PropTypes.arrayOf(PropTypes.object),
  fetch: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  liveResults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      flag: PropTypes.string,
      price: PropTypes.string,
      time: PropTypes.string,
    }).isRequired
  ).isRequired,
  inDollars: PropTypes.number,
  to: PropTypes.string,
};

Main.defaultProps = {
  fifteenDay: [],
  historicalDay: [],
  exchangeVolume: [],
  inDollars: 0,
  to: "",
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
