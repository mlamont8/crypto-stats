const coinByDay = (state={}, action) => {
    switch (action.type) {
        case 'COIN_BY_DAY_SUCCESS':
            return {...state,
              data: action.items}
        default:
            return state
    }
}

export default coinByDay
