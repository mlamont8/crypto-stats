import { combineReducers } from 'redux'
import allCoins from './allCoins'
import apiFetch from './apiFetch'
import searchTerm from './searchTerm'


const cryptoApp = combineReducers({

allCoins,
apiFetch,
searchTerm

})

export default cryptoApp
