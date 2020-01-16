import apiHelper from '../apiHelper';

export const auth = (payload) => {
    return dispatch => {
      apiHelper({
        url: '/login',
        method: 'POST',
        data: payload
      }).then(authStatus => {
        window.localStorage.setItem('token', authStatus.token)
        window.localStorage.setItem('status', authStatus.status)
        window.localStorage.setItem('userName', authStatus.userName)
        window.localStorage.setItem('name', authStatus.name)
        dispatch({type: 'LOGIN',email: payload.emailID,password: payload.password, token:authStatus.token})
      })
        .catch(error => {
          console.log('Error')
        })
    };
}