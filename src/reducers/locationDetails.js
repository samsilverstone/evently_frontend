// import { REHYDRATE } from 'redux-persist';

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
            console.log("action.data", action.data)
            return {
                ...state,
                isLoading: false,
                data: action.data
            }
        case 'INFO_RESET':
            return {
                ...state,
                isLoading: true,
                data: []
            }

        case 'REHYDRATE':
            console.log("rehydrate locationdetails running")
            return {
                isLoading: action.payload.isLoading,
                data: action.payload.data
            }

        default:
            return state
    }
}