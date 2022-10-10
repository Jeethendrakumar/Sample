export default (state = [] , actions) => {
    switch (actions.type) {
        case 'FETCH_API':
            return actions.payload
        default:
            return state
    }
}