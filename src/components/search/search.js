import React from 'react'
import CoinForm from '../coinForm/CoinForm'
import CoinInfo from '../coinInfo/coinInfo'

const Search = () => {
  return (
    <div className='row searchContainer'>
      <div className='col-md-6'>
        <CoinForm />
      </div>
      <div className='col-md-6'>
        <CoinInfo />
      </div>
    </div>
  )
}


export default Search
