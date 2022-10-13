const initialState = {
    requested: false,
    error: false,
    fetched: false,
    page: 1
}

export default (state = initialState , actions) => {
    switch (actions.type) {
        case 'PATCH_API':
            return {...state, ...actions.payload, requested: false  }
        case 'FETCH_API':
            return {...state, payload : actions.payload, fetched: true, requested: false }
        default:
            return state
    }
}