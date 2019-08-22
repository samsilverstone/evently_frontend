const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    isLoading: true,
    user: null,
    errors: {},
}

export default function auth(state = initialState, action) {
    switch (action.type) {
        case 'USER_LOADING':
            return { ...state, isLoading: true }

        case 'USER_LOADED':
            return { ...state, isAuthenticated: true, isLoading: false, user: action.username }

        case 'LOGIN_SUCCESSFUL':
            localStorage.setItem("token", action.data.token)
            return { ...state, isAuthenticated: true, isLoading: false, errors: null }

        case 'REGISTRATION_SUCCESSFUL':
            localStorage.setItem("token", action.data.token.token)
            return { ...state, isAuthenticated: true, isLoading: false, errors: null }

        case 'AUTHENTICATION_ERROR':
        case 'LOGIN_FAILED':
        case 'REGISTRATION_FAILED':
        case 'PASSWORD_CHANGED':
        case 'LOGOUT_SUCCESSFUL':
            localStorage.removeItem("token")
            console.log(action.data)
            return { ...state, errors: action.data, token: null, user: null, isAuthenticated: false, isLoading: false };

        case 'PASSWORD_MISMATCH':
            return { ...state, errors: action.data };

        default:
            return state;
    }
}