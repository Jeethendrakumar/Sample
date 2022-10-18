const initialState = {
    requested: false,
    error: false,
    fetched: false,
    current_page: 1,
    current_id: 'new',
    limit: 100,
    page: 1
}

export default (state = initialState , { type, payload }) => {
    switch (type) {
        case 'PATCH_API':
            return {...state, ...payload, requested: false  }
        case 'FETCH_API':
            return {...state, result : payload, fetched: true, requested: false }
        default:
            return state
    }
}