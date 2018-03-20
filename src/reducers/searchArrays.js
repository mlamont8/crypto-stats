const searchArrays = (state={}, action) => {
    switch (action.type) {

        case 'MARKET_ARRAY_CREATED':
            console.log(action.data, 'marketarray data')
            return {...state,
              marketArray: action.data
              }

        case 'CONVERT_TO_ARRAY_CREATED':
           return {...state,
              convertTo: action.exchangeResults[action.item]
            }

        default:
            return state
    }

}

export default searchArrays
