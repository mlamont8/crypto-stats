

const initial = (state={}, action) => {
    switch (action.type) {
        case 'START_DATA':
            return action.data
        default: 
            return state
    }
  
}

export default initial
