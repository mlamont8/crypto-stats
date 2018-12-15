const modal = (state = { status: false }, action) => {
    switch (action.type) {
        case "INITIAL_SEARCH":
            return {
                ...state,
                status: action.toggle
            };

            case 'CLOSE_MODAL':
            return {
                ...state,
                status: action.toggle
            };
            
            case "SEARCH_RESET":
            return {
                ...state,
                status: action.toggle
            }

        default:
            return state;
    }
}

export default modal;