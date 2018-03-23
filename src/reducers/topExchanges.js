const topExchanges = (state={}, action) => {
    switch (action.type) {

        case 'EXCHANGE_BY_VOLUME' :
            return {...state,
              data: action.data}

        default:
            return state
    }
}

export default topExchanges
