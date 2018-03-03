import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './index'

 
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
 

describe('actions', () => {
 
  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {

    const store = mockStore({})
      return store.dispatch(actions.fetchCoinList()).then(() => {
        const actions = store.getActions()
      // return of async actions
      expect(actions[1].type).toEqual('FRONT_FETCH_DATA_SUCCESS')
    })
  })



})
