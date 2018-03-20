
const searchTerm = (state={}, action) => {
    switch (action.type) {
        case 'SEARCH_TERM_ENTERED':
            return {...state,
              SearchTerm: action.SearchTerm}

        case 'MARKET_SELECTION_ENTERED':
        case 'CONVERT_FROM_ENTERED':
        case 'CONVERT_TO_ENTERED':
            return {...state,
              [action.id]: action.item }

        default:
            return state
    }

}

export default searchTerm
