const searchArray = (state=[], action) => {
    switch (action.type) {
        case 'MARKET_ARRAY_FETCHED':
            return {...state,
              exchangeArray: Object.keys(action.data).sort()
              }

        default:
            return state
    }

}

export default searchArray
