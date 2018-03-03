const coinByDay = (state={}, action) => {
    switch (action.type) {
        // case 'COIN_BY_DAY_SUCCESS':
        //     return {...state,
        //       data: action.items}

        case 'SEVEN_DAY_UPDATE' :
            return {...state,
              sevenDay: action.newData}

        case 'THIRTY_DAY_UPDATE' :
            return {...state,
              thirtyDay: action.data}

        default:
            return state
    }
}

export default coinByDay
