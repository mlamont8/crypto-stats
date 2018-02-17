
const apiFetch = (state={}, action) => {
    switch (action.type) {
        case 'API_IS_FETCHING':
            return {...state,
              isLoading: action.isLoading}

        default:
            return state
    }

}

export default apiFetch
