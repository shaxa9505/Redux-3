const initialState = {value: 0};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "INCREMENT":
            return {
                ...state,
                value: state.value + 1
            }
        case "DECREMENT":
            return {
                ...state,
                value: state.value - 1
            }
        case "RANDOM":
            return {
                ...state,
                value: state.value = payload
            }
        default:
            return state
    }
}
export {reducer}
