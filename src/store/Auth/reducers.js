import { initialState } from 'store/Auth/initialState';
import * as types from 'store/Auth/types';

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.GET_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        user: initialState.user,
        token: initialState.token,
        error: initialState.error,
      };
    case types.GET_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: initialState.isLoading,
        user: action.user,
        token: action.token,
        error: initialState.error,
      };
    case types.GET_LOGIN_ERROR:
      return {
        ...state,
        isLoading: initialState.isLoading,
        token: initialState.token,
        error: action.error,
      };
    case types.GET_TOKEN_REQUEST:
      return {
        ...state,
        isRequested: initialState.isRequested,
        token: initialState.token,
      };
    case types.GET_TOKEN_SUCCESS:
      return {
        ...state,
        isRequested: true,
        token: action.token,
      };
    default:
      return state;
  }
}
