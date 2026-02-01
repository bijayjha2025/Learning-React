
export const authInitialState = { user: null };

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, user: action.payload };
        default:
            return state;
    }
}