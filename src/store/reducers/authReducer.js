const initialState = {
    authError: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login failed')
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login successful')
            return {
                ...state,
                authError: null
            }

        case 'LOGOUT_SUCCESS':
            console.log('logout successful')
            return state

        case 'SIGNUP_SUCCESS':
            console.log('signup successful')
            return {
                ...state,
                authError: null

            }
        case 'SIGNUP_ERROR':
            console.log('signup failed!')
            return {
                ...state,
                authError: action.err.message

            }
        default:
            return state

    }
}

export default authReducer