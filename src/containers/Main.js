import React from 'react'
import {connect} from 'react-redux'
import {fetchCoinList} from '../actions'
import Header from '../components/header/header'
import Summary from '../components/summary/summary'

class Main extends React.Component {

  componentDidMount() {
    this.props.data()
  }

  render() {
    return (
      <div>
        <Header />
        <Summary />
        <p>Main Component</p>
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

export default connect(null, mapDispatchToProps)(Main)
