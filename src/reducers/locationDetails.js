const initialState = {
    formatted_address: null,
    formatted_phone_number: null,
    reviews: [],
    // open_close_timing: null,
    website: null,
    isLoading: true
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'INFO_LOADING':
            return { ...state, isLoading: true }

        case 'INFO_LOADED':
            return { ...state, isLoading: false, formatted_address: action.data.formatted_address, formatted_phone_number: action.data.formatted_phone_number, reviews: action.data.reviews, open_close_timing: action.data.opening_hour, website: action.data.website }

        default:
            return state
    }
}