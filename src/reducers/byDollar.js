const byDollar = (state = {}, action) => {
    switch (action.type) {
        case 'DOLLAR_CONVERSION':
            return {
                ...state,
                dollars: action.dollars,
            };

        default:
            return state;
    }
};

export default byDollar;