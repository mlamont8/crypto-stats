const errors = (state = {}, action) => {
    switch (action.type) {
        case "COIN_LISTING_ERROR":
            console.log('action', action);
            return {
                ...state,
                type: action.error.type,
                id: action.error.id,
                item: action.error.item,
            }

        case "SEARCH_RESET":
            return {
                ...state,
                type: null,
                id: null,
                item: null
            }
        default:
            return state;
    }
};

export default errors;