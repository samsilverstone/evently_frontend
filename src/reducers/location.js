const initialState = {
    nearbyData: null,
    isLoading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'DATA LOADING':
            return { ...state, isLoading: false }
        case 'DATA LOADED':
            return { ...state, nearbyData: action.data.data, isLoading: false }

        default:
            return state
    }
}