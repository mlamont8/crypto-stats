
const searchTerm = (state={}, action) => {
    switch (action.type) {
        case 'SEARCH_TERM_ENTERED':
            return {...state,
              SearchTerm: action.SearchTerm}

        case 'SELECTION_ENTERED':
        
            return {...state,
              [action.id]: action.item }

        default:
            return state
    }

}

export default searchTerm
