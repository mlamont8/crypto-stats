import { combineReducers } from 'redux'
import allCoins from './allCoins'
import apiFetch from './apiFetch'


const cryptoApp = combineReducers({

allCoins,
apiFetch

})

export default cryptoApp
