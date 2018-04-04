import React from 'react';
import { connect } from 'react-redux';
import SelectControl from '../selectControl/SelectControl';
import { DoSearch, SelectData } from '../../actions';


class CoinForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(e) {
    this.props.selectChange(e.target.id, e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.search();
  }


  // After each select, update store with new variables adding current Market,
  // coin converting from and to.
  render() {
    const sortedMarket = Object.keys(this.props.marketArray).sort();

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="col-md-4">
          <SelectControl
            data={sortedMarket}
            handleSelectChange={this.handleSelectChange}
            type="market"
          />
        </div>

        {this.props.marketTerm ? (
          <div className="col-md-4">
            <div className="row">
              <SelectControl
                data={Object.keys(this.props.convertFrom).sort()}
                handleSelectChange={this.handleSelectChange}
                type="convertFrom" />
            </div>
            <div className="row">
              <p>{this.props.cNameFrom}</p>
            </div>
          </div>

        ) : (
            null
          )}


        {this.props.fromTerm ? (
          <div className="col-md-4">
            <div className="row">
              <SelectControl
                data={this.props.toArray}
                handleSelectChange={this.handleSelectChange}
                type="convertTo" />
            </div>
            <div className="row">
              <p>{this.props.cNameTo}</p>
            </div>
          </div>
        ) : (
            null
          )}

      </form>


    );
  }
}

const mapDispatchToProps = dispatch => ({
  search: () => {
    dispatch(DoSearch());
  },
  selectChange: (id, item) => {
    dispatch(SelectData(id, item));
  },
});


const mapStateToProps = state => ({
  exchanges: state.initialLoadData.exchanges,
  isLoading: state.isLoading.isLoading,
  marketArray: state.searchArrays.marketArray,
  marketTerm: state.searchTerm.market,
  fromTerm: state.searchTerm.convertFrom,
  convertFrom: state.searchArrays.convertFrom,
  toArray: state.searchArrays.convertTo,
  cNameFrom: state.coinName.convertFrom,
  cNameTo: state.coinName.convertTo,
});

export default connect(mapStateToProps, mapDispatchToProps)(CoinForm);
