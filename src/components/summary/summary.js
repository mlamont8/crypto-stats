import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Top Summary information


const Summary = props => (
  <div className="row summary">
    <div className="col-sm-2 summary-left">
      <div className="info-block">
        <h1>{props.coinFrom}</h1>
        <p>/{props.coinTo}</p>
        <p>Exchange: {props.exchange}</p>
      </div>
    </div>
    <div className="col-sm-8 summary-center" />
    <div className="col-sm-2 summary-right" />
  </div>


);


const mapStateToProps = state => ({
  exchange: state.searchTerm.market,
  coinFrom: state.searchTerm.convertFrom,
  coinTo: state.searchTerm.convertTo,
});

Summary.propTypes = {
  coinFrom: PropTypes.string.isRequired,
  coinTo: PropTypes.string.isRequired,
  exchange: PropTypes.string.isRequired,
};


export default connect(mapStateToProps)(Summary);
