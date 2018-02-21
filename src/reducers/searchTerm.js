
const searchTerm = (state={}, action) => {
    switch (action.type) {
        case 'SEARCH_TERM_ENTERED':
            return {...state,
              SearchTerm: action.SearchTerm}

        default:
            return state
    }

}

export default searchTerm
