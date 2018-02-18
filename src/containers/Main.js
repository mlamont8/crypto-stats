import React from 'react'
import {connect} from 'react-redux'
import {fetchCoinList} from '../actions'
import Header from '../components/header/header.js'

class Main extends React.Component {

  componentDidMount() {
    this.props.data()
  }

  render() {
    return (
      <div>
        <Header />
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
