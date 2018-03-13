import { combineReducers } from 'redux'
import exchanges from './exchanges'
import isLoading from './isLoading'
import searchTerm from './searchTerm'
import coinByDay from './coinByDay'
import searchArray from './marketArray'


const cryptoApp = combineReducers({

    isLoading,
    exchanges,
    searchArray,
    searchTerm,
    coinByDay

})

export default cryptoApp
