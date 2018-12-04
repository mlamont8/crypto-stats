const modal = (state = { status: false }, action) => {
    switch (action.type) {
        case "MODAL_TOGGLE":
            return {
                ...state,
                status: action.toggle
            };

        default:
            return state;
    }
}

export default modal;