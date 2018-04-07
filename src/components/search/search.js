import React from 'react';
import CoinForm from '../../containers/coinForm/CoinForm';
import CoinInfo from '../coinInfo/coinInfo';

const Search = () => (
  <div className="row searchContainer">
    <div className="col-md-6">
      <CoinForm />
    </div>
    <div className="col-md-6">
      <CoinInfo />
    </div>
  </div>
);


export default Search;
