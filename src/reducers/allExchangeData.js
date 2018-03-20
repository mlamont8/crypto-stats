
const initialState = {
    exchanges: {},
    fetched: false
}

const allExchangeData = (state=initialState, action) => {
    switch (action.type) {
        case 'EXCHANGE_FETCH_SUCCESS':
            return {...state,
              exchanges: action.exchanges,
              fetched: action.fetched}

        default:
            return state
    }

}

export default allExchangeData
