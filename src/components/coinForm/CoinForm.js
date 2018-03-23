import React from 'react';
import SelectControl from '../selectControl/SelectControl'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { DoSearch, SelectData } from '../../actions'
import PropTypes from 'prop-types'


class CoinForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'BTC',
      market: '',
      coinFrom: '',
      coinTo: ''
    };
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

        <SelectControl
          data={sortedMarket}
          handleSelectChange={this.handleSelectChange}
          type="market" />

        {market ? (
          <SelectControl
            data={Object.keys(this.props.convertFrom).sort()}
            handleSelectChange={this.handleSelectChange}
            type="convertFrom" />
        ) : (
            null
          )}


        {fromTerm ? (
          <SelectControl
            data={this.props.toArray}
            handleSelectChange={this.handleSelectChange}
            type="convertTo" />
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
    toArray: state.searchArrays.convertTo
  }
}

CoinForm.propTypes = {
  exchanges: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinForm)
