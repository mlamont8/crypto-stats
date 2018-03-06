import React from 'react'
import {connect} from 'react-redux'
import {CoinByDay, fetchExchanges} from '../actions'
import Header from '../components/header/header'
import Summary from '../components/summary/summary'
import Search from './search/search'
import DailyBarChart from '../components/dailyBarChart/DailyBarChart'
import DailyLineChart from '../components/dailyLineChart/DailyLineChart'

class Main extends React.Component {

  componentDidMount() {
    // this.props.search('BTC')
    this.props.fetch();
  }

  render() {
    const {isLoading, sevenDay, thirtyDay} = this.props
    return isLoading
      ? <div>Loading</div>
      :
      <div>
        <Header />
        <Summary />
        <Search />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <DailyBarChart
              data={sevenDay} />
            </div>

            <div className="col-md-6">
                <DailyLineChart
                  data={thirtyDay} />
            </div>
          </div>
        </div>
    </div>
      }
}

const mapDispatchToProps = dispatch => {
  return {
    // search: (term) => {
    //   dispatch(CoinByDay(term))
    // }
    fetch: () => {
      dispatch(fetchExchanges())
    }
  }
}

const mapStateToProps = state => {
  return {
    sevenDay: state.coinByDay.sevenDay,
    thirtyDay: state.coinByDay.thirtyDay,
    isLoading: state.apiFetch.isLoading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
