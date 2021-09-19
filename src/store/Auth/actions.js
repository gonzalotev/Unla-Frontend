/* eslint-disable max-len */
import * as types from './types';

export const authLoginRequest = (email, password) => ({ type: types.GET_LOGIN_REQUEST, email, password });
export const authLoginSuccess = (user, token) => ({ type: types.GET_LOGIN_SUCCESS, user, token });
export const authLoginError = (error) => ({ type: types.GET_LOGIN_ERROR, error });

export const authGetTokenRequest = () => ({ type: types.GET_TOKEN_REQUEST });
export const authGetTokenSuccess = (token) => ({ type: types.GET_TOKEN_SUCCESS, token });
