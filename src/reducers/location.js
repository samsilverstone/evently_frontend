// import { REHYDRATE } from 'redux-persist';

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
            console.log(state.nearbyData)
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

        case 'REHYDRATE':
            console.log("Rehydrate location running")
            return {
                nearbyData: action.payload.nearbyData,
                isLoading: action.payload.isLoading,
                next_page_token: action.payload.next_page_token,
                origin: action.payload.origin
            };

        default:
            return state
    }
}