import React from 'react';
import { FormControl, ControlLabel, FormGroup } from 'react-bootstrap'
import SelectControl from '../selectControl/SelectControl'
import {connect} from 'react-redux'
import {CoinByDay} from '../../actions'
import PropTypes from 'prop-types'


class CoinForm extends React.Component {
// const CoinForm = (props) => {

constructor(props) {
  super(props);
  this.state = {
    value: 'BTC',
    market: '',
    coinFrom: '',
    coinTo: ''
    };
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleSelectChange = this.handleSelectChange.bind(this);
}



getValidationState() {
  const length = this.state.value.length;
  if (length > 2) return 'success';
  else if (length > 1) return 'warning';
  else if (length > 0) return 'error';
  return null;
}

handleChange(e) {
   this.setState({ value: e.target.value });
 }

 handleSelectChange(e) {
   console.log(e.target.id, e.target.value)
    this.setState({ market: e.target.value });
  }

 handleSubmit(e) {
   e.preventDefault()
   this.props.search(this.state.value)
 }


// text input only temporary, selections should be handled with select.
// After each select, update store with new variables adding current Market,
// current Coin to and from values from new reducers.
render() {

  return (
    <form onSubmit={this.handleSubmit}>
      <FormGroup
        controlId="coin-search"
        validationState={this.getValidationState()}
      >
        <ControlLabel>CryptoCoin Name</ControlLabel>
        <FormControl
          type="text"
          value={this.state.value}
          placeholder="Enter text"
          onChange={this.handleChange}
        />
        <FormControl.Feedback />

      </FormGroup>

    <SelectControl
      data={this.props.marketArray}
      handleSelectChange={this.handleSelectChange}
      type="market"/>


  <div className="col-md-4">
  <FormGroup controlId="coinTo">
  <ControlLabel>Convert To</ControlLabel>
  <FormControl componentClass="select" placeholder="select">
     {this.props.marketArray.map((market, index) =>
       <option key={index} value={market}>{market}</option>
     )}
  </FormControl>
</FormGroup>
</div>
    </form>


)}
}

const mapDispatchToProps = dispatch => {
  return {
    search: (term) => {
      dispatch(CoinByDay(term))
    }
  }
}

const mapStateToProps = state => {
  return {
    exchanges: state.exchanges.exchanges,
    isLoading: state.isLoading.isLoading,
    marketArray: state.searchArray.exchangeArray
  }
}

CoinForm.propTypes = {
  exchanges: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinForm)
