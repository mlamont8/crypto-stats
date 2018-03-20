import React from 'react'
import {connect} from 'react-redux'
import CoinForm from '../../components/coinForm/CoinForm'

class Search extends React.Component {

// Only render Child components
// when market data has been received

  render(){
    return this.props.exchanges.fetched
    ? null
    :
    <div className='container searchContainer'>
      <div className='col-md-6'>
        <CoinForm
          exchanges={this.props.exchanges}
          searchTerm={this.props.search}/>
      </div>
    </div>
    }
    }



const mapStateToProps = state => {
  return {
    exchanges: state.allExchangeData.exchanges,
  }
}

 export default connect(mapStateToProps, null)(Search)
