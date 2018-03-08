import React from 'react';
import { FormControl, ControlLabel, FormGroup } from 'react-bootstrap'
import {connect} from 'react-redux'
import {CoinByDay} from '../../actions'
import PropTypes from 'prop-types'


class CoinForm extends React.Component {
// const CoinForm = (props) => {

constructor(props) {
  super(props);
  this.state = {
    value: 'BTC',
    market: ''
    };
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
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

 handleSubmit(e) {
   e.preventDefault()
   this.props.search(this.state.value)
 }


// text input only temporary, selections should be handled with select
render() {
  const exchanges = Object.keys(this.props.exchanges).sort()
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
      <FormGroup controlId="market">
      <ControlLabel>Market</ControlLabel>
      <FormControl componentClass="select" placeholder="select">
         {exchanges.map((market, index) =>
           <option key={index} value={market}>{market}</option>
         )}
      </FormControl>
    </FormGroup>
    
    </form>
  )

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
  return {
    exchanges: state.exchanges.exchanges,
    isLoading: state.isLoading.isLoading
  }
}

CoinForm.propTypes = {
  exchanges: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinForm)
