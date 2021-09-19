import { takeLatest, call, put } from 'redux-saga/effects';
import { removeToken, setToken, getToken } from 'services/storage';
import { authLoginSuccess, authLoginError, authGetTokenSuccess } from 'store/Auth/actions';
import { GET_LOGIN_REQUEST, GET_TOKEN_REQUEST } from 'store/Auth/types';
import { requestLogin } from 'services/auth';
import { push } from 'connected-react-router';

export function* login({ email, password }) {
  try {
    const user = yield call(requestLogin, email, password);
    if (user) {
      const token = 'test token';
      yield setToken(token);
      yield put(authLoginSuccess(user, token));
      yield put(push('/'));
      // TODO remove next line when the user is login
    } else {
      yield removeToken();
      yield put(authLoginError('Not found user.'));
    }
  } catch (error) {
    yield removeToken();
    yield put(authLoginError('Internal error'));
  }
}

export function* tokenRequest() {
  const token = yield call(getToken);
  yield put(authGetTokenSuccess(token));
}

export function* authSaga() {
  yield takeLatest(GET_LOGIN_REQUEST, login);
  yield takeLatest(GET_TOKEN_REQUEST, tokenRequest);
}
