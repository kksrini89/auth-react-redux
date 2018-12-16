import { SET_CURRENT_USER, LOGGING_IN, LOGGED_IN, LOGGED_OUT } from './types';
import Axios from 'axios';
import jwt from 'jsonwebtoken';
import setAuthorizationToken from '../../Utils/util';

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    user
  };
};

export const login_request = () => {
  return {
    type: LOGGING_IN
  };
};

export const login = user => dispatch => {
  dispatch(login_request());
  return Axios.post(`/api/login`, { email: user, password: user.password }).then(res => {
    const token = res.data.token;
    localStorage.setItem('jwtToken', token);
    setAuthorizationToken(token);
    const user = jwt.decode(token);
    // dispatch(setCurrentUser(user));
    dispatch({ type: LOGGED_IN, payload: user });
  });
};

export const logout = () => {
  return {
    type: LOGGED_OUT
  };
};
