import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Header from "../containers/header/header";
import Summary from "./summary/summary";
import DailyBarChart from "../components/dailyBarChart/DailyBarChart";
import DailyAreaChart from "../components/dailyAreaChart/DailyAreaChart";
import ExchangeVolume from "../components/exchangeVolume/exchangeVolume";
import LiveGrid from "../components/liveGrid/liveGrid";

class Main extends React.Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { isLoading, sevenDay, thirtyDay, exchangeVolume, liveResults } = this.props;
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
                />
              </div>
              <div className="col-md-8">
                <DailyAreaChart data={thirtyDay} />
              </div>
            </div>

            <div className="row second-row">
              <div className="col-md-6">
                <DailyBarChart data={sevenDay} />
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
  sevenDay: state.coinByDay.sevenDay,
  thirtyDay: state.coinByDay.thirtyDay,
  isLoading: state.isLoading.fetching,
  exchangeVolume: state.topExchanges.data,
  market: state.searchTerm.market,
  from: state.searchTerm.convertFrom,
  to: state.searchTerm.convertTo,
  liveResults: state.liveResults
});

Main.propTypes = {
  sevenDay: PropTypes.arrayOf(PropTypes.object),
  thirtyDay: PropTypes.arrayOf(PropTypes.object),
  exchangeVolume: PropTypes.arrayOf(PropTypes.object),
  fetch: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  liveResults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      flag: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

Main.defaultProps = {
  sevenDay: [],
  thirtyDay: [],
  exchangeVolume: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
