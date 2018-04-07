import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/header/header';
import Summary from './summary/summary';
import Search from '../components/search/search';
import DailyBarChart from '../components/dailyBarChart/DailyBarChart';
import DailyAreaChart from '../components/dailyAreaChart/DailyAreaChart';
import ExchangeVolume from '../components/exchangeVolume/exchangeVolume';
import { initialFetch } from '../actions';

class Main extends React.Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const {
      hasLoaded, sevenDay, thirtyDay, exchangeVolume,
    } = this.props;
    return !hasLoaded
      ? <div>Loading</div>
      :

      <div>
        <Header />
        <div className="container-fluid dash-container">
          <Summary />
          <Search
            exchanges={this.props.exchanges}
          />

          <div className="row first-row">
            <div className="col-md-12">
              <DailyAreaChart
                data={thirtyDay}
              />
            </div>
          </div>

          <div className="row second-row">

            <div className="col-md-4">
              <DailyBarChart
                data={sevenDay}
              />
            </div>

            <div className="col-md=4" />
            <div className="col-md-4">
              <ExchangeVolume
                data={exchangeVolume}
              />
            </div>

          </div>
        </div>
      </div>;
  }
}

const mapDispatchToProps = dispatch => ({
  fetch: () => {
    dispatch(initialFetch());
  },
});

const mapStateToProps = state => ({
  exchanges: state.initialLoadData.exchanges,
  sevenDay: state.coinByDay.sevenDay,
  thirtyDay: state.coinByDay.thirtyDay,
  hasLoaded: state.isLoading.apiHasLoaded,
  exchangeVolume: state.topExchanges.data,
});

Main.propTypes = {
  exchanges: PropTypes.objectOf(PropTypes.object),
  sevenDay: PropTypes.arrayOf(PropTypes.object),
  thirtyDay: PropTypes.arrayOf(PropTypes.object),
  hasLoaded: PropTypes.bool,
  exchangeVolume: PropTypes.arrayOf(PropTypes.object),
  fetch: PropTypes.func.isRequired,
};

Main.defaultProps = {
  exchanges: [],
  sevenDay: [],
  thirtyDay: [],
  hasLoaded: false,
  exchangeVolume: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
