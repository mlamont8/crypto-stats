import React from 'react'
import { connect } from 'react-redux'

// Make Container...get summary data from store

// Top Summary information

class Summary extends React.Component {

render() {
return (

        <div className ='row summary'>
            <div className='col-sm-2 summary-left'>
                <div className="info-block">
                <h1>{this.props.coinFrom}</h1>
                <p>/{this.props.coinTo}</p>
                <p>Exchange: {this.props.exchange}</p>
                </div>
            </div>
            <div className='col-sm-8 summary-center'>
            </div>
            <div className='col-sm-2 summary-right'>
            </div>
         </div>

)}

}

const mapStateToProps = state => {
  return {
    exchange: state.searchTerm.market,
    coinFrom: state.searchTerm.convertFrom,
    coinTo: state.searchTerm.convertTo
  }
}

export default connect(mapStateToProps)(Summary);
