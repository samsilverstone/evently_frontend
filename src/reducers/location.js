const initialState = {
    nearbyData: null,
    isLoading: true
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'DATA LOADING':
            return { ...state, isLoading: true }
        case 'DATA LOADED':
            return { ...state, nearbyData: action.data.data, isLoading: false }

        default:
            return state
    }
}