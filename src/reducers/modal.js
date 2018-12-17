const modal = (state = { status: false }, action) => {
    switch (action.type) {

        // Closes Modal
        case 'CLOSE_MODAL':
            return {
                ...state,
                status: false
            };

        // Opens Modal
        case "SEARCH_MODAL":
            return {
                ...state,
                status: true
            }

        default:
            return state;
    }
}

export default modal;