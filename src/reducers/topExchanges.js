const topExchanges = (state={}, action) => {
    switch (action.type) {

        case 'TOP_EXCHANGES_UPDATE' :
            return {...state,
              data: action.data}

        default:
            return state
    }
}

export default topExchanges