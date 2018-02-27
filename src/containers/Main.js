import React from 'react'
import {connect} from 'react-redux'
import {fetchCoinList} from '../actions'
import Header from '../components/header/header'
import Summary from '../components/summary/summary'
import Search from './search/search'
import DailyBarChart from '../components/dailyBarChart/DailyBarChart'

class Main extends React.Component {

  componentDidMount() {
    this.props.data()
  }

  render() {
    return (
      <div>
        <Header />
        <Summary />
        <Search />
        <p>Main Component</p>
        <DailyBarChart
        data={this.props.daily} />
    </div>
    )}
}

const mapDispatchToProps = dispatch => {
  return {
    data: () => {
      dispatch(fetchCoinList())
    }
  }
}

const mapStateToProps = state => {
  return {
    daily: state.coinByDay.data
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
