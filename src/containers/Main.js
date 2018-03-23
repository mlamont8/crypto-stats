import React from 'react'
import {connect} from 'react-redux'
import {initialFetch} from '../actions'
import Header from '../components/header/header'
import Summary from '../components/summary/summary'
import Search from '../components/search/search'
import DailyBarChart from '../components/dailyBarChart/DailyBarChart'
import DailyLineChart from '../components/dailyLineChart/DailyLineChart'

class Main extends React.Component {

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const {hasLoaded, sevenDay, thirtyDay} = this.props
    return !hasLoaded
      ? <div>Loading</div>
      :

      <div>
        <Header />
        <Summary />
        <Search
          exchanges={this.props.exchanges}/>
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
    hasLoaded: state.isLoading.apiHasLoaded
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
