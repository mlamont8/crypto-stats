import { combineReducers } from 'redux'
import exchanges from './exchanges'
import apiFetch from './apiFetch'
import searchTerm from './searchTerm'
import coinByDay from './coinByDay'


const cryptoApp = combineReducers({

exchanges,
apiFetch,
searchTerm,
coinByDay

})

export default cryptoApp
