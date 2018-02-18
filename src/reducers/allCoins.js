

const allCoins = (state={}, action) => {
    switch (action.type) {
        case 'FRONT_FETCH_DATA_SUCCESS':
            return {...state,
              coins: action.items}

        default:
            return state
    }

}

export default allCoins
