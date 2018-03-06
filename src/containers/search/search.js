import React from 'react'
import {connect} from 'react-redux'
import { FormControl, ControlLabel, FormGroup } from 'react-bootstrap'
import {CoinByDay} from '../../actions'

class Search extends React.Component {

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

  render(){
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
      <FormGroup controlId="marketSelect">
      <ControlLabel>Market</ControlLabel>
      <FormControl componentClass="select" placeholder="select">
        <option value="select">select</option>
        <option value="other">...</option>
      </FormControl>
    </FormGroup>
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
    isLoading: state.isLoading.isLoading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
