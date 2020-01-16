const initialState = {
    email: 'impact123@impactanalytics.co',
    password: 'impactpassword',
    token: null,
}
const reducer = (state = initialState, action) => {
    if(action.type === 'LOGIN') {
        return {
            ...state,
            email:action.email,
            password: action.password,
            token: action.token
        }
    }
    return state;
    
}
console.log('initial state2', initialState);
export default reducer;