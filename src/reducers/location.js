const initialState = {
    nearbyData: [],
    isLoading: true,
    next_page_token: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'DATA LOADING':
            return { ...state, isLoading: true }
        case 'NEXT_PAGE_DATA':
        case 'DATA LOADED':
            console.log(action.data.nextpagetoken)
            return { nearbyData: state.nearbyData.concat(action.data.data), next_page_token: action.data.nextpagetoken, isLoading: false }

        default:
            return state
    }
}