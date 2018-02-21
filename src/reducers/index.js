import { combineReducers } from 'redux'
import allCoins from './allCoins'
import apiFetch from './apiFetch'
import searchTerm from './searchTerm'
import coinByDay from './coinByDay'


const cryptoApp = combineReducers({

allCoins,
apiFetch,
searchTerm,
coinByDay

})

export default cryptoApp
