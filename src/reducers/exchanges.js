

const exchanges = (state={}, action) => {
    switch (action.type) {
        case 'EXCHANGE_FETCH_SUCCESS':
            return {...state,
              exchanges: action.exchanges}

        default:
            return state
    }

}

export default exchanges
