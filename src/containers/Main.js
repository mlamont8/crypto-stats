import React from 'react'
import { connect } from 'react-redux'
import { initialFetch } from '../actions'
import Header from '../components/header/header'
import Summary from '../components/summary/summary'
import Search from '../components/search/search'
import DailyBarChart from '../components/dailyBarChart/DailyBarChart'
import DailyLineChart from '../components/dailyLineChart/DailyLineChart'
import ExchangeVolume from '../components/exchangeVolume/exchangeVolume'

class Main extends React.Component {

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { hasLoaded, sevenDay, thirtyDay, exchangeVolume } = this.props
    return !hasLoaded
      ? <div>Loading</div>
      :

      <div>
        <Header />
        <Summary />
        <Search
          exchanges={this.props.exchanges} />

        <div className="container">
          <div className="row">

            <div className="col-md-12">
              <DailyLineChart
                data={thirtyDay} />
            </div>

            <div className="row">

              <div className="col-md-4">
                <DailyBarChart
                  data={sevenDay} />
              </div>

              <div className="col-md=4">
              </div>

              <div className="col-md-4">
                <ExchangeVolume
                  data={exchangeVolume} />
              </div>

            </div>
          </div>
        </div>
      </div>
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetch: () => {
      dispatch(initialFetch())
    }
  }
}

const mapStateToProps = state => {
  return {
    exchanges: state.initialLoadData.exchanges,
    sevenDay: state.coinByDay.sevenDay,
    thirtyDay: state.coinByDay.thirtyDay,
    hasLoaded: state.isLoading.apiHasLoaded,
    exchangeVolume: state.topExchanges.data

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
