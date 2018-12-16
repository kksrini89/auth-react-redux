import { SET_CURRENT_USER, LOGGING_IN, LOGGED_IN, LOGGED_OUT } from '../actions/types';

// const initialState = {
//   isAuthenticated: false,
//   user: {}
// };
const initialState = {
  is_loggin_in: false,
  is_logged_in: false,
  user: {}
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGING_IN:
      return {
        ...state,
        is_loggin_in: true
      };
    case LOGGED_IN:
      return {
        ...state,
        is_loggin_in: false,
        is_logged_in: true,
        user: action.payload
      };
    case LOGGED_OUT:
      return {
        ...state,
        is_loggin_in: false,
        is_logged_in: false,
        user: null
      };
    // case SET_CURRENT_USER:
    //   return {
    //     ...state,
    //     isAuthenticated: action.user ? true : false,
    //     user
    //   };
    default:
      return {
        ...state
      };
  }
};
