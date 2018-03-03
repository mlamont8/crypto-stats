import React from 'react'
import {connect} from 'react-redux'
import {CoinByDay} from '../actions'
import Header from '../components/header/header'
import Summary from '../components/summary/summary'
import Search from './search/search'
import DailyBarChart from '../components/dailyBarChart/DailyBarChart'

class Main extends React.Component {

  componentDidMount() {
    this.props.search('BTC')
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
        <p>Main Component</p>
        <DailyBarChart
        data={sevenDay} />
    </div>
      }
}

const mapDispatchToProps = dispatch => {
  return {
    search: (term) => {
      dispatch(CoinByDay(term))
    }
  }
}

const mapStateToProps = state => {
  // const { apiFetch, coinByDay } = state
  return {
    sevenDay: state.coinByDay.sevenDay,
    thirtyDay: state.coinByDay.thirtyDay,
    isLoading: state.apiFetch.isLoading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
