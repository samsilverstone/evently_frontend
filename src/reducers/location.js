import saveState from '../components/localstorage'

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
            saveState({
                nearbyData: state.nearbyData.concat(action.data.data),
                next_page_token: action.data.nextpagetoken,
                isLoading: false,
                origin: action.data.origin
            })
            return {
                nearbyData: state.nearbyData.concat(action.data.data),
                next_page_token: action.data.nextpagetoken,
                isLoading: false,
                origin: action.data.origin
            }

        case 'RESET':
            return {
                ...state,
                nearbyData: [],
                isLoading: true,
                next_page_token: null
            }
        default:
            return state
    }
}