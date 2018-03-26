const CoinName = (state = {}, action) => {
    switch (action.type) {
        case 'COIN_LOOKUP':
        console.log(action.coin)
            if (action.coin) {
            return {
                ...state,
                [action.id]: action.coin.CoinName
            }
         }
            return {
                ...state,
                [action.id]: ""
            }

        default:
            return state

    }
}

export default CoinName