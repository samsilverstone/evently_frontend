const initialState = {
    nearbyData: [],
    isLoading: true,
    next_page_token: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'DATA LOADING':
            return {
                ...state,
                isLoading: true
            }
        case 'NEXT_PAGE_DATA':
        case 'DATA LOADED':
            return {
                nearbyData: state.nearbyData.concat(action.data.data),
                next_page_token: action.data.nextpagetoken,
                isLoading: false,
                origin: action.data.origin
            }

        default:
            return state
    }
}