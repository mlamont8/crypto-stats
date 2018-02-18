import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './index'
// import * as types from '../../constants/ActionTypes'
// import fetchMock from 'fetch-mock'
// import expect from 'expect' // You can use any testing library
 
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
 
// describe('async actions', () => {
//   afterEach(() => {
//     fetchMock.reset()
//     fetchMock.restore()
//   })
 
  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
//     fetchMock
//       .getOnce('/todos', { body: { todos: ['do something'] }, headers: { 'content-type': 'application/json' } })
//  
 
    // const expectedActions = [
    //   { type: types.API_IS_FETCHING },
    //   { type: types.FRONT_FETCH_DATA_SUCCESS }
    // ]
    const store = mockStore({})
      return store.dispatch(actions.fetchCoinList()).then(() => {
        const actions = store.getActions()
      // return of async actions
      console.log('actions', actions[0])
      expect(actions[1].type).toEqual('FRONT_FETCH_DATA_SUCCESS')
    })
  })
// })