const CoinLookup = (state = {}, action) => {
    switch (action.type) {
        case 'COIN_LOOKUP':
            return {
                ...state,
                [action.id]: action.coin.CoinName
            }

        default:
            return state

    }
}

export default CoinLookup