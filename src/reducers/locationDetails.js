const initialState = {
    data: [],
    isLoading: true
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'INFO_LOADING':
            return {
                ...state,
                isLoading: true
            }

        case 'INFO_LOADED':
            console.log(action.data)
            return {
                ...state,
                isLoading: false,
                data: action.data
            }

        default:
            return state
    }
}