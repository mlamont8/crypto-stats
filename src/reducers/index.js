import { combineReducers } from 'redux'
import exchanges from './exchanges'
import isLoading from './isLoading'
import searchTerm from './searchTerm'
import coinByDay from './coinByDay'


const cryptoApp = combineReducers({

    isLoading,
    exchanges,
    searchTerm,
    coinByDay

})

export default cryptoApp
