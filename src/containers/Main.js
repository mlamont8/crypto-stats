import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Header from "../components/header/header";
import Summary from "./summary/summary";
import Search from "../components/search/search";
import DailyBarChart from "../components/dailyBarChart/DailyBarChart";
import DailyAreaChart from "../components/dailyAreaChart/DailyAreaChart";
import ExchangeVolume from "../components/exchangeVolume/exchangeVolume";
import Live from "../components/live/live";
// import { initialFetch } from "../actions";

class Main extends React.Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const {
      isLoading,
      sevenDay,
      thirtyDay,
      exchangeVolume,
      market,
      from,
      to
    } = this.props;
    return isLoading ? (
      <div>Loading</div>
    ) : (
        <div>
          <Header />
          <div className="container-fluid dash-container">
            <Summary />
            <Search />

            <div className="row first-row">
              <div className="col-md-12">
                <DailyAreaChart data={thirtyDay} />
              </div>
            </div>

            <div className="row second-row">
              <div className="col-md-4">
                <DailyBarChart data={sevenDay} />
              </div>

              <div className="col-md=4">
                <Live market={market} from={from} to={to} />
              </div>
              <div className="col-md-4">
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
    // dispatch(initialFetch());
    dispatch({ type: "EXCHANGE_FETCH_REQUESTED" });
  }
});

const mapStateToProps = state => ({
  // exchanges: state.initialLoadData.exchanges,
  sevenDay: state.coinByDay.sevenDay,
  thirtyDay: state.coinByDay.thirtyDay,
  isLoading: state.isLoading.fetching,
  exchangeVolume: state.topExchanges.data,
  market: state.searchTerm.market,
  from: state.searchTerm.convertFrom,
  to: state.searchTerm.convertTo
});

Main.propTypes = {
  // exchanges: PropTypes.objectOf(PropTypes.object),
  sevenDay: PropTypes.arrayOf(PropTypes.object),
  thirtyDay: PropTypes.arrayOf(PropTypes.object),
  exchangeVolume: PropTypes.arrayOf(PropTypes.object),
  fetch: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  market: PropTypes.string,
  from: PropTypes.string,
  to: PropTypes.string
};

Main.defaultProps = {
  exchanges: [],
  sevenDay: [],
  thirtyDay: [],
  exchangeVolume: [],
  market: "",
  from: "",
  to: ""
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
