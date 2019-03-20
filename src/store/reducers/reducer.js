

const initialState = {
    email: '',
    password: ''
}
const reducer = (state = initialState, action) => {
    if(action.type === 'LOGIN') {
        return {
            ...state,
            email:action.email,
            password: action.password
        }
    }
    return state;
    
}
console.log('initial state2', initialState);
export default reducer;