import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LineChart from '../../components/lineChart/LineChart';

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
    <div className="col-sm-8 summary-center">
      <LineChart
        data={props.byHour}
      />
    </div>
    <div className="col-sm-2 summary-right" />
  </div>


);


const mapStateToProps = state => ({
  exchange: state.searchTerm.market,
  coinFrom: state.searchTerm.convertFrom,
  coinTo: state.searchTerm.convertTo,
  byHour: state.coinByHour.coinByHour,
});

Summary.defaultProps = {
  coinFrom: '',
  coinTo: '',
  exchange: '',
  byHour: [],
};

Summary.propTypes = {
  coinFrom: PropTypes.string,
  coinTo: PropTypes.string,
  exchange: PropTypes.string,
  byHour: PropTypes.arrayOf(PropTypes.object),
};


export default connect(mapStateToProps)(Summary);
