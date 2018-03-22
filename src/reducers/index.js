import { combineReducers } from 'redux'
import allExchangeData from './allExchangeData'
import isLoading from './isLoading'
import searchTerm from './searchTerm'
import coinByDay from './coinByDay'
import searchArrays from './searchArrays'
import topExchanges from './topExchanges'


const cryptoApp = combineReducers({

    isLoading,
    allExchangeData,
    searchArrays,
    searchTerm,
    coinByDay,
    topExchanges

})

export default cryptoApp
