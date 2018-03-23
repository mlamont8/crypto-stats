import { combineReducers } from 'redux'
import initialLoadData from './initialLoadData'
import isLoading from './isLoading'
import searchTerm from './searchTerm'
import coinByDay from './coinByDay'
import searchArrays from './searchArrays'
import topExchanges from './topExchanges'


const cryptoApp = combineReducers({

    isLoading,
    initialLoadData,
    searchArrays,
    searchTerm,
    coinByDay,
    topExchanges

})

export default cryptoApp
