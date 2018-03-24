import React from 'react';
import SelectControl from '../selectControl/SelectControl'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { DoSearch, SelectData } from '../../actions'


class CoinForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }



  handleSelectChange(e) {
    this.props.selectChange(e.target.id, e.target.value)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.search()
  }



  // After each select, update store with new variables adding current Market,
  // coin converting from and to.
  render() {
    let market = this.props.marketTerm
    let fromTerm = this.props.fromTerm
    let sortedMarket = Object.keys(this.props.marketArray).sort()

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="col-md-4">
          <SelectControl
            data={sortedMarket}
            handleSelectChange={this.handleSelectChange}
            type="market" />
        </div>

        {market ? (
          <div className="col-md-4">
            <div className="row">
              <SelectControl
                data={Object.keys(this.props.convertFrom).sort()}
                handleSelectChange={this.handleSelectChange}
                type="convertFrom" />
            </div>
            <div className="row">
 
            </div>
          </div>

        ) : (
            null
          )}


        {fromTerm ? (
          <div className="col-md-4">
            <div className="row">
              <SelectControl
                data={this.props.toArray}
                handleSelectChange={this.handleSelectChange}
                type="convertTo" />
            </div>
            <div className="row">
              <p>{this.props.coinTo}</p>
            </div>
          </div>
        ) : (
            null
          )}

        {fromTerm ? (
          <Button type="submit">Submit</Button>
        ) : (
            null
          )}


      </form>


    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    search: () => {
      dispatch(DoSearch())
    },
    selectChange: (id, item) => {
      dispatch(SelectData(id, item))
    }
  }
}

const mapStateToProps = state => {
  return {
    exchanges: state.initialLoadData.exchanges,
    isLoading: state.isLoading.isLoading,
    marketArray: state.searchArrays.marketArray,
    marketTerm: state.searchTerm.market,
    fromTerm: state.searchTerm.convertFrom,
    convertFrom: state.searchArrays.convertFrom,
    toArray: state.searchArrays.convertTo,
    coinFrom: state.coinLookup.convertFrom,
    coinTo: state.coinLookup.convertTo
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CoinForm)
