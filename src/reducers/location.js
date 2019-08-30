const initialState = {
    nearbyData: null,
    isLoading: true,
    next_page_token: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'DATA LOADING':
            return { ...state, isLoading: true }
        case 'NEXT_PAGE_DATA':
        case 'DATA LOADED':
            return { ...state, nearbyData: action.data.data, next_page_token: action.data.next_page_token, isLoading: false }

        default:
            return state
    }
}