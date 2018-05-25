const historical = (state = {}, action) => {
    switch (action.type) {

        case 'HISTORICAL_UPDATE':
            return {
                ...state,
                fullHistory: action.fullHistory,
            };

        default:
            return state;
    }
};

export default historical;
